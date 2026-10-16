import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0bb00b5y.css';
import '../../css/q/q5bh6acin.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e0bb00b5y"/><path class="q5bh6acin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-insulation-48-bold"} {...others} />);
}

export default Component;
