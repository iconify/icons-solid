import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szahujb-p.css';
import '../../css/t/tat5f9buu.css';
import '../../css/i/ijzvcdc3l.css';
import '../../css/r/re21d5fjp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="szahujb-p"/><path class="tat5f9buu"/><path class="ijzvcdc3l"/><path class="re21d5fjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:prescription-20"} {...others} />);
}

export default Component;
