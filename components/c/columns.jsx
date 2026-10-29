import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/juiiy04eh.css';
import '../../css/p/p0gape1-s.css';
import '../../css/b/b7v8_m6vs.css';
import '../../css/x/xocy4gbsw.css';
import '../../css/k/ku-_9wzpj.css';
import '../../css/w/w2t211beu.css';
import '../../css/y/y4hnv6j5q.css';
import '../../css/k/kmepbdtpm.css';
import '../../css/z/zslsbjbdh.css';
import '../../css/w/wr3j649mi.css';
import '../../css/l/ly_me7dsv.css';
import '../../css/j/jq6c8tb4b.css';
import '../../css/q/q2fn7770j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="juiiy04eh wm-shadow"/><path class="p0gape1-s wm-k"/><path class="b7v8_m6vs wm-k"/><path class="wm-k xocy4gbsw"/><path class="ku-_9wzpj wm-k"/><path class="w2t211beu wm-shine"/><path class="wm-k y4hnv6j5q"/><path class="kmepbdtpm wm-a"/><path class="wm-a zslsbjbdh"/><path class="wm-a wr3j649mi"/><path class="ly_me7dsv wm-a"/><path class="jq6c8tb4b wm-a"/><path class="q2fn7770j wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:columns"} {...others} />);
}

export default Component;
