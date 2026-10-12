import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hg_u039uv.css';
import '../../css/e/e2m_lkbvn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hg_u039uv"/><path class="e2m_lkbvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hard-drive-upload-filled"} {...others} />);
}

export default Component;
