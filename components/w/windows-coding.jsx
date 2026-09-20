import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/w/w2_h5sbyr.css';
import '../../css/x/xnpgncbdh.css';
import '../../css/j/jrqwx5bhk.css';
import '../../css/i/iud9rnblw.css';
import '../../css/t/tkh2-jymf.css';
import '../../css/t/tgyrqrbfv.css';
import '../../css/n/n7cbzgf6k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="w2_h5sbyr"/><path class="xnpgncbdh"/><path class="jrqwx5bhk"/><path class="iud9rnblw"/><path class="tkh2-jymf"/><path class="tgyrqrbfv"/><path class="n7cbzgf6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:windows-coding"} {...others} />);
}

export default Component;
