import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pr317i25u.css';
import '../../css/l/lazq1ab7l.css';
import '../../css/e/em-eh2bsd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pr317i25u"/><path class="lazq1ab7l"/><path class="em-eh2bsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:messages-square-duotone"} {...others} />);
}

export default Component;
