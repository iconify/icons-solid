import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/coevhbr-x.css';
import '../../css/p/pgm0xu8js.css';
import '../../css/m/m-p-uybhe.css';
import '../../css/k/ke0fn27zq.css';
import '../../css/t/tffdnqbpf.css';
import '../../css/b/baz6mpb8m.css';
import '../../css/r/rxlafjb6o.css';
import '../../css/c/chtvoyezf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="coevhbr-x"/><circle class="pgm0xu8js"/><circle class="m-p-uybhe"/><circle class="ke0fn27zq"/><path class="tffdnqbpf"/><circle class="baz6mpb8m"/><circle class="rxlafjb6o"/><circle class="chtvoyezf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:brain-circuit"} {...others} />);
}

export default Component;
