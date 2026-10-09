import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/juz-jcb_p.css';
import '../../css/v/vbotk2bgu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="juz-jcb_p"/><path class="vbotk2bgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:noise-reduction-20"} {...others} />);
}

export default Component;
