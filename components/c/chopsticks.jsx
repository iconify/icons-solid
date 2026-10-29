import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bddcfw36c.css';
import '../../css/k/k2xro4nwq.css';
import '../../css/w/w8qq505bs.css';
import '../../css/n/n7kzdpf7y.css';
import '../../css/v/v1wllurhd.css';
import '../../css/y/ygc25u7vh.css';
import '../../css/o/oi7yybc4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bddcfw36c wm-a"/><path class="k2xro4nwq wm-a"/><path class="w8qq505bs wm-a"/><path class="n7kzdpf7y wm-k"/><path class="v1wllurhd wm-k"/><path class="wm-k ygc25u7vh"/><path class="oi7yybc4r wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:chopsticks"} {...others} />);
}

export default Component;
