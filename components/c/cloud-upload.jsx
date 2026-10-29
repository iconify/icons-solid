import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a0324yg8z.css';
import '../../css/s/srwb1ks9y.css';
import '../../css/h/hmdebnb3c.css';
import '../../css/l/lkv7a5b3a.css';
import '../../css/y/yz466abbh.css';
import '../../css/q/qqn25xbsu.css';
import '../../css/m/m83avbc7l.css';
import '../../css/f/fdwi0vboe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a0324yg8z wm-k"/><path class="srwb1ks9y wm-k"/><path class="hmdebnb3c wm-k"/><path class="lkv7a5b3a wm-shine"/><path class="wm-s yz466abbh"/><path class="qqn25xbsu wm-s"/><path class="m83avbc7l wm-s"/><path class="fdwi0vboe wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:cloud-upload"} {...others} />);
}

export default Component;
