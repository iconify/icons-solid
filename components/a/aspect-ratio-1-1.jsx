import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uswxambah.css';
import '../../css/r/rpk1-uufe.css';
import '../../css/r/rmt56hgbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uswxambah"/><path class="rpk1-uufe"/><path class="rmt56hgbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:aspect-ratio-1-1"} {...others} />);
}

export default Component;
