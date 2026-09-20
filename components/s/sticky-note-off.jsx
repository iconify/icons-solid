import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wu6dt4bcc.css';
import '../../css/j/j20ig_gnv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wu6dt4bcc"/><path class="j20ig_gnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:sticky-note-off"} {...others} />);
}

export default Component;
