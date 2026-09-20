import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zziiasbpq.css';
import '../../css/z/z176l2i0d.css';
import '../../css/u/ubkr3mbhh.css';

const viewBox = {"width":720,"height":720};
const content = `<path class="zziiasbpq"/><path class="z176l2i0d"/><path class="ubkr3mbhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:matlab"} {...others} />);
}

export default Component;
