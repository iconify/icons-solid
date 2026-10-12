import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o4avq6bbw.css';
import '../../css/r/rbfuzcbwl.css';
import '../../css/j/jf8b9ilbx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o4avq6bbw"/><path class="rbfuzcbwl"/><path class="jf8b9ilbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:helicopter-duotone"} {...others} />);
}

export default Component;
