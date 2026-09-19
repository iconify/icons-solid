import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/etftr2brq.css';
import '../../css/i/i4pcs4-lg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="etftr2brq"/><circle class="i4pcs4-lg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:lowerrightwhitecircle"} {...others} />);
}

export default Component;
