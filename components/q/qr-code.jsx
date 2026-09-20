import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv65oib5o.css';
import '../../css/n/n7ab-r98n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pv65oib5o"/><path class="n7ab-r98n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:qr-code"} {...others} />);
}

export default Component;
