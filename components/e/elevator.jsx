import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yup2mrbmc.css';
import '../../css/b/bx6r8nbqq.css';
import '../../css/n/npykx5b5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yup2mrbmc"/><path class="bx6r8nbqq"/><path class="npykx5b5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:elevator"} {...others} />);
}

export default Component;
