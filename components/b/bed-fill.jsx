import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9_yt-30p.css';
import '../../css/p/pexua2j3v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s9_yt-30p"/><path clip-rule="evenodd" class="pexua2j3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:bed-fill"} {...others} />);
}

export default Component;
