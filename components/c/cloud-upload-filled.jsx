import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yn2pokbmn.css';
import '../../css/x/x83nf7g0i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yn2pokbmn"/><path class="x83nf7g0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cloud-upload-filled"} {...others} />);
}

export default Component;
