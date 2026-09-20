import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgvb2s.css';
import '../../css/y/ydovum.css';
import '../../css/k/kqeuxs.css';
import '../../css/u/unuj2t.css';
import '../../css/i/if5-bf.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-52.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2px.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wgvb2s ydovum"/><circle class="kqeuxs unuj2t ydovum"/><circle class="if5-bf kqeuxs ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:pizza-twotone"} {...others} />);
}

export default Component;
