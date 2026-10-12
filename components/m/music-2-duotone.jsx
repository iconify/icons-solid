import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jr8ztkieh.css';
import '../../css/a/a2aqf-btj.css';
import '../../css/j/jj-j86stw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jr8ztkieh"/><path class="a2aqf-btj"/><path class="jj-j86stw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:music-2-duotone"} {...others} />);
}

export default Component;
