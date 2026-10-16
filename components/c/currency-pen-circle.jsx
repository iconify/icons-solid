import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ii79gpbho.css';
import '../../css/f/ful373ohx.css';
import '../../css/b/b4uf77bka.css';
import '../../css/l/lmfgpy70a.css';
import '../../css/k/khdkximwp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ii79gpbho"/><path class="ful373ohx"/><path class="b4uf77bka"/><path class="lmfgpy70a"/><path class="khdkximwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-pen-circle"} {...others} />);
}

export default Component;
