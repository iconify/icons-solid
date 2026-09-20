import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d29v1oboa.css';
import '../../css/f/f4bf198co.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d29v1oboa"/><path class="f4bf198co"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:creative-commons"} {...others} />);
}

export default Component;
