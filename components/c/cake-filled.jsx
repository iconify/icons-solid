import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cr8bbzbli.css';
import '../../css/l/lo4g9ospx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cr8bbzbli"/><path class="lo4g9ospx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cake-filled"} {...others} />);
}

export default Component;
