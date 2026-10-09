import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/paacvi6ub.css';
import '../../css/d/dwbz_pxxl.css';
import '../../css/l/lr8y9s-tx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="paacvi6ub"/><path class="dwbz_pxxl"/><path class="lr8y9s-tx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:log-out-48-bold"} {...others} />);
}

export default Component;
