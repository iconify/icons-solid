import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/q0vhisb5a.css';
import '../../css/p/p54unnb9b.css';
import '../../css/n/n2xgticbb.css';
import '../../css/u/u13x2gfdm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="q0vhisb5a wm-shadow"/><path class="p54unnb9b wm-shadow"/><path class="n2xgticbb"/><path class="u13x2gfdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:door-closed"} {...others} />);
}

export default Component;
