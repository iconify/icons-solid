import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/q/q5-dt9q5a.css';
import '../../css/i/i_sac6b5d.css';
import '../../css/h/hlj6xxbjy.css';
import '../../css/q/qu92wmb6x.css';
import '../../css/o/o_kppqbvv.css';
import '../../css/h/he72pj5lo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="q5-dt9q5a"/><path class="i_sac6b5d"/><path class="hlj6xxbjy"/><path class="qu92wmb6x"/><path class="o_kppqbvv"/><path class="he72pj5lo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:blossom"} {...others} />);
}

export default Component;
