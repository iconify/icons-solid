import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwvkumbtq.css';
import '../../css/d/dgoos-asp.css';
import '../../css/e/edxwc44sq.css';
import '../../css/l/lb00gu55i.css';
import '../../css/n/nq5_p_bzp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bwvkumbtq"/><path class="dgoos-asp"/><path class="edxwc44sq"/><path class="lb00gu55i"/><path class="nq5_p_bzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-storage-alert-20"} {...others} />);
}

export default Component;
