import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0i_b9b7n.css';
import '../../css/z/z29x03b3t.css';
import '../../css/b/bw47ugbch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j0i_b9b7n"/><path class="z29x03b3t"/><path class="bw47ugbch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:eye-duotone"} {...others} />);
}

export default Component;
