import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnupiibrx.css';
import '../../css/z/zf2tkskut.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bnupiibrx"/><path class="zf2tkskut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:pen-tool-filled"} {...others} />);
}

export default Component;
