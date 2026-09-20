import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e35zetb5p.css';
import '../../css/m/mqbc9tg1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e35zetb5p"/><path class="mqbc9tg1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:megaphone-off"} {...others} />);
}

export default Component;
