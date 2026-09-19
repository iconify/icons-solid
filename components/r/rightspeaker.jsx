import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sj-p7ldds.css';
import '../../css/o/o67rmiljq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sj-p7ldds"/><path class="o67rmiljq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:rightspeaker"} {...others} />);
}

export default Component;
