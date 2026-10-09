import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s57ieff-v.css';
import '../../css/l/lf0d-y9oh.css';
import '../../css/x/xqdmtubva.css';
import '../../css/l/lpc58nnfg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s57ieff-v"/><path class="lf0d-y9oh"/><path class="xqdmtubva"/><path class="lpc58nnfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coral-20-bold"} {...others} />);
}

export default Component;
