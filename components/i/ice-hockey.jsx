import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wo9nqsi3z.css';
import '../../css/e/e7l1odb0b.css';
import '../../css/f/f6jbyibzu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wo9nqsi3z"/><ellipse class="e7l1odb0b"/><path class="f6jbyibzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:ice-hockey"} {...others} />);
}

export default Component;
