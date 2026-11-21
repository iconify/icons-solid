import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ut_1gjbdr.css';
import '../../css/i/im-u2lvxf.css';
import '../../css/a/akcqmhbfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ut_1gjbdr"/><path class="im-u2lvxf"/><path class="akcqmhbfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:globe-code-duotone"} {...others} />);
}

export default Component;
