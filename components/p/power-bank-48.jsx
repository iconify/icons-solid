import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6k2ncbcg.css';
import '../../css/a/aemftobud.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k6k2ncbcg"/><path class="aemftobud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-bank-48"} {...others} />);
}

export default Component;
