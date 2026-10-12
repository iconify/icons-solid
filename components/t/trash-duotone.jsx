import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eff4cabla.css';
import '../../css/g/gg3es5x5l.css';
import '../../css/i/i5b16xb_a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eff4cabla"/><path class="gg3es5x5l"/><path class="i5b16xb_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:trash-duotone"} {...others} />);
}

export default Component;
