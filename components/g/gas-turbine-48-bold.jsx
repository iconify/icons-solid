import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubh0c368i.css';
import '../../css/b/b1075nben.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ubh0c368i"/><path class="b1075nben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-turbine-48-bold"} {...others} />);
}

export default Component;
