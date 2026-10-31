import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/ca3ngwbkk.css';
import '../../css/f/f2l9xt51j.css';
import '../../css/l/l99bg1nyp.css';
import '../../css/u/ug3d5wb8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ca3ngwbkk wm-shadow"/><path class="f2l9xt51j wm-shadow"/><path class="l99bg1nyp"/><path class="ug3d5wb8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:burger"} {...others} />);
}

export default Component;
