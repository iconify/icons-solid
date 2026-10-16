import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcia1ds6l.css';
import '../../css/f/fo9trqysu.css';
import '../../css/q/quuwtjdku.css';
import '../../css/f/fye7pfxns.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pcia1ds6l"/><path class="fo9trqysu"/><path class="quuwtjdku"/><path class="fye7pfxns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hazard-gas-20-bold"} {...others} />);
}

export default Component;
