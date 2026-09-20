import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stwmvkq9n.css';
import '../../css/x/xnao-lbdh.css';
import '../../css/s/semxxhoex.css';
import '../../css/h/hwknedbmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="stwmvkq9n"/><path class="xnao-lbdh"/><path class="semxxhoex"/><path class="hwknedbmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:e-commerce-shopping-bag"} {...others} />);
}

export default Component;
