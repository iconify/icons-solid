import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eg5pxxbut.css';
import '../../css/a/any3dja6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="eg5pxxbut"/><path class="any3dja6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:transition-top"} {...others} />);
}

export default Component;
