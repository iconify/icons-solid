import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ktvkgs0ji.css';
import '../../css/k/kiehcdbvr.css';
import '../../css/r/r21737buk.css';
import '../../css/y/y9en5bc0q.css';
import '../../css/h/h5dzgkdti.css';
import '../../css/l/l0kw20bor.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ktvkgs0ji"/><path class="kiehcdbvr"/><path class="r21737buk"/><rect class="y9en5bc0q"/><circle transform="rotate(90 9.14 14.24)" class="h5dzgkdti"/><path class="l0kw20bor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:seek-forward-sixty"} {...others} />);
}

export default Component;
