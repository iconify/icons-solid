import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqax-6b-d.css';
import '../../css/f/fic52hb-m.css';
import '../../css/m/mtx6jf4xy.css';
import '../../css/o/o8x1rfpnw.css';
import '../../css/k/k0b12kb_x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="jqax-6b-d"><path class="fic52hb-m"/><path class="mtx6jf4xy"/><path class="o8x1rfpnw"/><path class="k0b12kb_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:dna"} {...others} />);
}

export default Component;
