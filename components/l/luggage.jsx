import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xefzqe80a.css';
import '../../css/p/pd4p74bgj.css';
import '../../css/o/o3uxh1tfl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="xefzqe80a"/><rect class="pd4p74bgj"/><path class="o3uxh1tfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:luggage"} {...others} />);
}

export default Component;
