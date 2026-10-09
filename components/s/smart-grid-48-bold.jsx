import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6nfsjb9y.css';
import '../../css/q/qotc-vbam.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r6nfsjb9y"/><path class="qotc-vbam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-grid-48-bold"} {...others} />);
}

export default Component;
