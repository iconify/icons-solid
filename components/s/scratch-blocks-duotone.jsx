import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gd7hbkjce.css';
import '../../css/o/opisurbex.css';
import '../../css/z/z1gzixbrz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gd7hbkjce"/><path class="opisurbex"/><path class="z1gzixbrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:scratch-blocks-duotone"} {...others} />);
}

export default Component;
