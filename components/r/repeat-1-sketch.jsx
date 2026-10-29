import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f33kfsb_i.css';
import '../../css/t/t7u-f0bvj.css';
import '../../css/s/skebkz5in.css';
import '../../css/l/lgxikgbwv.css';
import '../../css/g/g8ed_dbcn.css';
import '../../css/e/e1fzs96go.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f33kfsb_i wm-k"/><path class="t7u-f0bvj wm-a"/><path class="skebkz5in wm-s"/><path class="lgxikgbwv wm-k"/><path class="g8ed_dbcn wm-a"/><path class="e1fzs96go wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:repeat-1-sketch"} {...others} />);
}

export default Component;
