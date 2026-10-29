import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zabkgx3jw.css';
import '../../css/p/p-s04tbug.css';
import '../../css/s/sonegacxa.css';
import '../../css/b/b8fnn2y3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="zabkgx3jw"/><path class="p-s04tbug wm-a"/><path class="sonegacxa wm-k"/><path class="b8fnn2y3r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:square-code-sketch"} {...others} />);
}

export default Component;
