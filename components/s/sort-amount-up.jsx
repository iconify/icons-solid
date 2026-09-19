import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/px411qbye.css';
import '../../css/m/mobfej3oa.css';
import '../../css/n/nmxnfxicr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="px411qbye"/><path class="mobfej3oa"/><path class="nmxnfxicr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:sort-amount-up"} {...others} />);
}

export default Component;
