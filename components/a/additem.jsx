import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cppijccje.css';
import '../../css/h/hed83tssu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cppijccje"/><path class="hed83tssu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:additem"} {...others} />);
}

export default Component;
