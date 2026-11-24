import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vsujivkiy.css';
import '../../css/v/vo9bl5pgd.css';
import '../../css/t/tz7299b0o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vsujivkiy"/><path class="vo9bl5pgd"/><path class="tz7299b0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:beef-off-filled"} {...others} />);
}

export default Component;
