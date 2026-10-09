import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-1_twbuv.css';
import '../../css/u/un8javbzg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d-1_twbuv"/><path class="un8javbzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fish-48-bold"} {...others} />);
}

export default Component;
