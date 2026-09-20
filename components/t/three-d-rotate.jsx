import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/whgfoj3ew.css';
import '../../css/b/bmkp9fbng.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="whgfoj3ew"/><path class="bmkp9fbng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:three-d-rotate"} {...others} />);
}

export default Component;
