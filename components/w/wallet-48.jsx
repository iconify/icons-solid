import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7-dvibjv.css';
import '../../css/c/c2_o5pxqg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o7-dvibjv"/><path class="c2_o5pxqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wallet-48"} {...others} />);
}

export default Component;
