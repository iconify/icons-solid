import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yu94ktb9a.css';
import '../../css/y/y3-35o4du.css';
import '../../css/u/u5avl94_d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="yu94ktb9a"/><rect class="y3-35o4du"/><path class="u5avl94_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:battery-minus"} {...others} />);
}

export default Component;
