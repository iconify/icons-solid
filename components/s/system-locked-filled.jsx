import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3xin9bnu.css';
import '../../css/m/mqpb9vb5h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i3xin9bnu"/><path class="mqpb9vb5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:system-locked-filled"} {...others} />);
}

export default Component;
