import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ymoftpuut.css';
import '../../css/p/pbpibcbpr.css';
import '../../css/v/vzmopyyzf.css';
import '../../css/j/jpvknfbop.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k ymoftpuut"/><path class="pbpibcbpr wm-k"/><path class="vzmopyyzf wm-k"/><path class="jpvknfbop wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:package"} {...others} />);
}

export default Component;
