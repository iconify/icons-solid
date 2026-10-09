import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9mb5epez.css';
import '../../css/o/ofnlx5qvz.css';
import '../../css/n/nciip6bxo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v9mb5epez"/><path class="ofnlx5qvz"/><path class="nciip6bxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:move-48-bold"} {...others} />);
}

export default Component;
