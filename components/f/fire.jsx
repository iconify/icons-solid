import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp-nd7g4j.css';

const viewBox = {"width":424,"height":496};
const content = `<path class="xp-nd7g4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:fire"} {...others} />);
}

export default Component;
