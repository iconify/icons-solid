import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/shf4anbna.css';
import '../../css/x/x3xw6n-2f.css';
import '../../css/o/o8rexpb5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="shf4anbna"/><path class="x3xw6n-2f"/><path class="o8rexpb5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:affiliate"} {...others} />);
}

export default Component;
