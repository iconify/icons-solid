import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/io9vencun.css';
import '../../css/z/z9lj_eqfg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="io9vencun"/><path class="z9lj_eqfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:candle-20"} {...others} />);
}

export default Component;
