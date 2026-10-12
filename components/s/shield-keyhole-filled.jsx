import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykm2u3fal.css';
import '../../css/a/alh4zcbrk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ykm2u3fal"/><path clip-rule="evenodd" class="alh4zcbrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shield-keyhole-filled"} {...others} />);
}

export default Component;
