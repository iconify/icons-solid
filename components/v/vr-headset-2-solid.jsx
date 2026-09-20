import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1fr8ybcl.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="u1fr8ybcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:vr-headset-2-solid"} {...others} />);
}

export default Component;
