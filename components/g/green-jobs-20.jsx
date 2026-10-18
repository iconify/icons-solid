import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec4h7ebhn.css';
import '../../css/x/xz2t00wzg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ec4h7ebhn"/><path class="xz2t00wzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:green-jobs-20"} {...others} />);
}

export default Component;
