import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwn5zdbbq.css';
import '../../css/c/csaqs8n_p.css';
import '../../css/s/sscizya7w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bwn5zdbbq"/><path class="csaqs8n_p"/><path class="sscizya7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wireless-charging-48"} {...others} />);
}

export default Component;
