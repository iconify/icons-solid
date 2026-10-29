import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/w7u6oe5_g.css';
import '../../css/q/qp23ejbxi.css';
import '../../css/b/bfxxkbb9u.css';
import '../../css/v/vmddvxslr.css';
import '../../css/z/z76lyzb8o.css';
import '../../css/o/o9f00ybpo.css';
import '../../css/k/k9kdnbbgz.css';
import '../../css/a/ahte9sbtc.css';
import '../../css/s/s764c3bpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="w7u6oe5_g wm-shadow"/><path class="qp23ejbxi"/><path class="bfxxkbb9u"/><path class="vmddvxslr"/><path class="z76lyzb8o"/><path class="o9f00ybpo"/><path class="k9kdnbbgz"/><path class="ahte9sbtc wm-shine"/><path class="s764c3bpj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:git-merge"} {...others} />);
}

export default Component;
