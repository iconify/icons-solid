import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/as-6o-bsz.css';
import '../../css/x/x48sfiyvy.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="as-6o-bsz"/><path class="x48sfiyvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:devices-filled"} {...others} />);
}

export default Component;
