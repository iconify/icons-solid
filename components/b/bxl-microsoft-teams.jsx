import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7z7izt0q.css';
import '../../css/m/mvvtxab3j.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="p7z7izt0q"/><path class="mvvtxab3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-microsoft-teams"} {...others} />);
}

export default Component;
