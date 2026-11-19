import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f8fh8m_mm.css';
import '../../css/n/n4xt3eb6h.css';
import '../../css/h/hrcfinwcf.css';
import '../../css/n/nlgevhjxn.css';
import '../../css/z/z94k-_m9p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f8fh8m_mm"/><path class="n4xt3eb6h"/><path class="hrcfinwcf"/><circle class="nlgevhjxn"/><path class="z94k-_m9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-settings"} {...others} />);
}

export default Component;
