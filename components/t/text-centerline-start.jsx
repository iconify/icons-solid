import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wunt_8h3k.css';
import '../../css/d/dvuot18qs.css';
import '../../css/v/vyekqrbhl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="wunt_8h3k"/><rect class="dvuot18qs"/><path class="vyekqrbhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-centerline-start"} {...others} />);
}

export default Component;
