import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkygmcb8t.css';
import '../../css/a/ah052tbom.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pkygmcb8t"/><path class="ah052tbom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:medal-star-alt-filled"} {...others} />);
}

export default Component;
