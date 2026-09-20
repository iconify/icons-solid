import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mo4ib6bml.css';
import '../../css/h/hfyllwbid.css';
import '../../css/y/yklxlcb9b.css';

const viewBox = {"width":256,"height":256};
const content = `<circle class="mo4ib6bml"/><path class="hfyllwbid"/><path class="yklxlcb9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:blink-light"} {...others} />);
}

export default Component;
