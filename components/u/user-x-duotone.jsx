import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/om8z0cb6g.css';
import '../../css/g/g7-z5_thi.css';
import '../../css/c/cbixqekze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="om8z0cb6g"/><path class="g7-z5_thi"/><path class="cbixqekze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-x-duotone"} {...others} />);
}

export default Component;
