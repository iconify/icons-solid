import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kea6ddroh.css';
import '../../css/p/pfg-p2u8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kea6ddroh"/><path class="pfg-p2u8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:badge-indian-rupee"} {...others} />);
}

export default Component;
