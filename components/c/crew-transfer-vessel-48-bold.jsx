import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2dc9v3fg.css';
import '../../css/j/jwps220zj.css';
import '../../css/b/bdd_6-bdx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x2dc9v3fg"/><path class="jwps220zj"/><path class="bdd_6-bdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crew-transfer-vessel-48-bold"} {...others} />);
}

export default Component;
