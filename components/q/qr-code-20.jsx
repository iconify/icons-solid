import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ka0hemtmx.css';
import '../../css/c/cm0047wom.css';
import '../../css/i/ij08oib1e.css';
import '../../css/o/opl2tbcms.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ka0hemtmx"/><path class="cm0047wom"/><path class="ij08oib1e"/><path class="opl2tbcms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:qr-code-20"} {...others} />);
}

export default Component;
