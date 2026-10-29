import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fv552nidk.css';
import '../../css/a/a714wabld.css';
import '../../css/y/y-o80nbrs.css';
import '../../css/p/pf9cqzq4q.css';
import '../../css/f/fcqp69bgt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fv552nidk wm-k"/><path class="a714wabld wm-a"/><path class="wm-shadow y-o80nbrs"/><path class="pf9cqzq4q wm-k"/><path class="fcqp69bgt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:laptop-engrave"} {...others} />);
}

export default Component;
