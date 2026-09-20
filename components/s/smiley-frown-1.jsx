import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/a/av_gk9g6e.css';
import '../../css/c/crcwzxbsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="av_gk9g6e"/><path class="crcwzxbsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:smiley-frown-1"} {...others} />);
}

export default Component;
