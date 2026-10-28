import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/crsplxbrf.css';
import '../../css/c/ctkkkdbvq.css';
import '../../css/d/duzaevl3a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="crsplxbrf"/><path class="ctkkkdbvq"/><path class="duzaevl3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-function"} {...others} />);
}

export default Component;
