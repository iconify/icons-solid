import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kk7o3vb8z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kk7o3vb8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:focus-filled"} {...others} />);
}

export default Component;
