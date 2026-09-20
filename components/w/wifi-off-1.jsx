import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kc0kr9btf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kc0kr9btf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:wifi-off-1"} {...others} />);
}

export default Component;
