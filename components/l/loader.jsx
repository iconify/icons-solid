import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ect5xlb6n.css';
import '../../css/a/a15ah9b0u.css';
import '../../css/l/l9fnm5b6o.css';
import '../../css/v/vk7medc0w.css';
import '../../css/r/rol8tsrnp.css';
import '../../css/y/ynmx90bvu.css';
import '../../css/q/qee-p399i.css';
import '../../css/r/rm78ecbst.css';
import '../../css/d/drcej7bph.css';
import '../../css/w/wlixu7zaf.css';
import '../../css/j/joum2hf0j.css';
import '../../css/c/cktfa4bpm.css';
import '../../css/k/k0lzamn-g.css';
import '../../css/h/h6_5mm-hy.css';
import '../../css/s/s6kmziggp.css';
import '../../css/h/hythreb3b.css';
import '../../css/g/gnqalunsf.css';
import '../../css/s/s12-erc8r.css';
import '../../css/b/bkv6m7b5q.css';
import '../../css/w/wj_6wjbxk.css';
import '../../css/n/n3e2vfhoq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ect5xlb6n wm-shadow"/><path class="a15ah9b0u wm-k"/><path class="l9fnm5b6o wm-k"/><path class="vk7medc0w wm-k"/><path class="rol8tsrnp wm-k"/><path class="wm-shine ynmx90bvu"/><path class="qee-p399i wm-k"/><path class="rm78ecbst wm-k"/><path class="drcej7bph wm-k"/><path class="wlixu7zaf wm-k"/><path class="joum2hf0j wm-shine"/><path class="cktfa4bpm wm-a"/><path class="k0lzamn-g wm-a"/><path class="h6_5mm-hy wm-a"/><path class="s6kmziggp wm-a"/><path class="hythreb3b wm-a"/><path class="gnqalunsf wm-a"/><path class="s12-erc8r wm-a"/><path class="bkv6m7b5q wm-a"/><path class="wj_6wjbxk wm-a"/><path class="n3e2vfhoq wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:loader"} {...others} />);
}

export default Component;
