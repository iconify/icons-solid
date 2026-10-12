import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4a0pfb5b.css';
import '../../css/y/y_elplb8u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b4a0pfb5b"/><path clip-rule="evenodd" class="y_elplb8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:brick-wall-shield-filled"} {...others} />);
}

export default Component;
