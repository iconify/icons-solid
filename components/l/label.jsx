import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sqk7ozb8q.css';
import '../../css/b/bhk5crhwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sqk7ozb8q"/><path class="bhk5crhwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:label"} {...others} />);
}

export default Component;
