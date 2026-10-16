import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvhllmb7y.css';
import '../../css/p/pdneidbqf.css';
import '../../css/g/gefufqhah.css';
import '../../css/f/fp4n13b1w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dvhllmb7y"/><path class="pdneidbqf"/><path class="gefufqhah"/><path class="fp4n13b1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:church-48-bold"} {...others} />);
}

export default Component;
