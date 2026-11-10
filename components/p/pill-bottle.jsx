import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r6r-0tb0y.css';
import '../../css/m/mpb01cb9t.css';
import '../../css/a/ad7qzcbfn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r6r-0tb0y"/><path class="mpb01cb9t"/><path class="ad7qzcbfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pill-bottle"} {...others} />);
}

export default Component;
