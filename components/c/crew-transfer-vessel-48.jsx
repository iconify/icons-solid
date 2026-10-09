import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wznngcc3g.css';
import '../../css/t/tk3p5zjbs.css';
import '../../css/k/kko9x2bho.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wznngcc3g"/><path class="tk3p5zjbs"/><path class="kko9x2bho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crew-transfer-vessel-48"} {...others} />);
}

export default Component;
