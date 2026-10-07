import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bv9v4xlge.css';
import '../../css/j/jb730ab3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bv9v4xlge"/><path class="jb730ab3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:heading-level-1"} {...others} />);
}

export default Component;
