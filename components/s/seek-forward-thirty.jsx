import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ktvkgs0ji.css';
import '../../css/k/kiehcdbvr.css';
import '../../css/r/r21737buk.css';
import '../../css/y/y9en5bc0q.css';
import '../../css/t/tdh2430ff.css';
import '../../css/w/wstpe7b1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ktvkgs0ji"/><path class="kiehcdbvr"/><path class="r21737buk"/><rect class="y9en5bc0q"/><path class="tdh2430ff"/><path class="wstpe7b1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:seek-forward-thirty"} {...others} />);
}

export default Component;
