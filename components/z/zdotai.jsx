import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpy9ok0_d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dpy9ok0_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:zdotai"} {...others} />);
}

export default Component;
