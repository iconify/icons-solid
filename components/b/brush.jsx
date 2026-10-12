import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tkse8qeon.css';
import '../../css/r/rf1to2b4w.css';
import '../../css/l/lnwew2bga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tkse8qeon"/><path class="rf1to2b4w"/><path class="lnwew2bga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:brush"} {...others} />);
}

export default Component;
