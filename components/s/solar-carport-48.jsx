import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilwycjmrk.css';
import '../../css/t/tlj013tdx.css';
import '../../css/i/i93cs7j8n.css';
import '../../css/h/h6wfktt5w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ilwycjmrk"/><path class="tlj013tdx"/><path class="i93cs7j8n"/><path class="h6wfktt5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-carport-48"} {...others} />);
}

export default Component;
