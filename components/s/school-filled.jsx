import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0otgbc0o.css';
import '../../css/z/zh6xcri0n.css';
import '../../css/t/tsmhkwu9x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x0otgbc0o"/><path clip-rule="evenodd" class="zh6xcri0n"/><path class="tsmhkwu9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:school-filled"} {...others} />);
}

export default Component;
