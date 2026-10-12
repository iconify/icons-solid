import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cced90blf.css';
import '../../css/h/h4wi3-b1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="cced90blf"/><path class="h4wi3-b1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:external-link"} {...others} />);
}

export default Component;
