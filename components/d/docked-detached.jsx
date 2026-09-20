import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xno89sb5c.css';
import '../../css/e/e0093cbza.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xno89sb5c"/><rect class="e0093cbza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:docked-detached"} {...others} />);
}

export default Component;
