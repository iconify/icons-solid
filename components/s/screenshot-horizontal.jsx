import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kceq0bbfs.css';
import '../../css/o/onutncc0z.css';
import '../../css/s/s3330sbyk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kceq0bbfs"/><path class="onutncc0z"/><path class="s3330sbyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:screenshot-horizontal"} {...others} />);
}

export default Component;
