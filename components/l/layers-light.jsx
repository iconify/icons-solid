import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q7dhke2ou.css';
import '../../css/e/eqfcgpbth.css';
import '../../css/p/p4n2f7byf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q7dhke2ou"/><path clip-rule="evenodd" class="eqfcgpbth"/><path clip-rule="evenodd" class="p4n2f7byf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:layers-light"} {...others} />);
}

export default Component;
