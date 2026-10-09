import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tby_lo-nb.css';
import '../../css/e/e33pt4b0g.css';
import '../../css/p/ps6ai49ok.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tby_lo-nb"/><path class="e33pt4b0g"/><path class="ps6ai49ok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gauge-20"} {...others} />);
}

export default Component;
