import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9nvmf1iv.css';
import '../../css/f/fca5_bcqu.css';
import '../../css/i/iqtmhgbcj.css';
import '../../css/c/c8fwwvt5o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e9nvmf1iv"/><path class="fca5_bcqu"/><path class="iqtmhgbcj"/><path class="c8fwwvt5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tidal-turbine-48-bold"} {...others} />);
}

export default Component;
