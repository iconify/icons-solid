import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2mi622fc.css';
import '../../css/r/rwbaszb0j.css';
import '../../css/c/c-4w8acaz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g2mi622fc"/><path class="rwbaszb0j"/><path class="c-4w8acaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendars-duotone"} {...others} />);
}

export default Component;
