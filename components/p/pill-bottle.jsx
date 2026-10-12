import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cbiulopcv.css';
import '../../css/m/mqaalvm4n.css';
import '../../css/t/twefmensu.css';
import '../../css/a/ad7qzcbfn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cbiulopcv"/><path class="mqaalvm4n"/><rect class="twefmensu"/><path class="ad7qzcbfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pill-bottle"} {...others} />);
}

export default Component;
