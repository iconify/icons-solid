import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txg_57bbj.css';
import '../../css/y/yz7fw7w9r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="txg_57bbj"/><path class="yz7fw7w9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:luggage-48-bold"} {...others} />);
}

export default Component;
