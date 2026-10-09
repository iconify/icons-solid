import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trh7j8bwt.css';
import '../../css/t/tkwuedbzn.css';
import '../../css/s/sifm99blv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="trh7j8bwt"/><path class="tkwuedbzn"/><path class="sifm99blv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:speaker-wifi-48"} {...others} />);
}

export default Component;
