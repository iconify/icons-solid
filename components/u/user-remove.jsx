import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zvxrz6bfm.css';
import '../../css/j/jrk2ux-un.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zvxrz6bfm"/><path class="jrk2ux-un"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-remove"} {...others} />);
}

export default Component;
