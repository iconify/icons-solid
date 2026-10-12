import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uosw-0eyq.css';
import '../../css/x/x7-tn3b9i.css';
import '../../css/a/apjv0bbim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uosw-0eyq"/><path class="x7-tn3b9i"/><path class="apjv0bbim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-root-duotone"} {...others} />);
}

export default Component;
