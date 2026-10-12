import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aq8lyzp4d.css';
import '../../css/c/cj2g5-b5u.css';
import '../../css/h/hmmcrtbfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aq8lyzp4d"/><path class="cj2g5-b5u"/><path class="hmmcrtbfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:banknote-duotone"} {...others} />);
}

export default Component;
