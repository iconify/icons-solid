import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/li6-bgbll.css';
import '../../css/w/w0crhbbtq.css';
import '../../css/g/gbz97_bij.css';
import '../../css/j/jdnkyut0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="li6-bgbll"/><path class="w0crhbbtq"/><path class="gbz97_bij"/><path class="jdnkyut0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:file-text"} {...others} />);
}

export default Component;
