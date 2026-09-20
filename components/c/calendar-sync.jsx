import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fntzryfta.css';
import '../../css/i/iw2xs4bqm.css';
import '../../css/g/gzjxlqbhq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fntzryfta"/><path class="iw2xs4bqm"/><path class="gzjxlqbhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:calendar-sync"} {...others} />);
}

export default Component;
