import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/ftn4-ib5z.css';
import '../../css/x/xdj0mwx3w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ftn4-ib5z"/><path class="xdj0mwx3w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:smartphone"} {...others} />);
}

export default Component;
