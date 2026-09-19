import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ojjq-4bcv.css';
import '../../css/d/d70jivo9u.css';
import '../../css/a/a8ijy1plb.css';
import '../../css/f/f6hdfiifw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ojjq-4bcv"/><path class="d70jivo9u"/><path class="a8ijy1plb"/><path class="f6hdfiifw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mouse-left-click-04"} {...others} />);
}

export default Component;
