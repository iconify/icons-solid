import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/a4kx4u-7b.css';
import '../../css/c/chv1cqj4q.css';
import '../../css/g/g1e8lrx8n.css';
import '../../css/c/c_zfviipj.css';
import '../../css/u/uni3jpbzz.css';
import '../../css/f/fav5ggb0c.css';
import '../../css/y/yakcktbgn.css';
import '../../css/b/b-ejjckvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="a4kx4u-7b"/><path class="chv1cqj4q"/><path class="g1e8lrx8n wm-shine"/><path class="c_zfviipj wm-k"/><path class="uni3jpbzz wm-a"/><path class="fav5ggb0c"/><path class="yakcktbgn"/><path class="b-ejjckvo wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:drill"} {...others} />);
}

export default Component;
