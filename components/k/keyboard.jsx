import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/nm6zu1b6b.css';
import '../../css/n/nzkp49b1k.css';
import '../../css/a/a_-f_rbjf.css';
import '../../css/n/nl8u9ehql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="nm6zu1b6b"/><path class="nzkp49b1k wm-shine"/><path class="a_-f_rbjf wm-k"/><path class="nl8u9ehql wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:keyboard"} {...others} />);
}

export default Component;
