import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c82o5ynbu.css';
import '../../css/a/anw2c1jrb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c82o5ynbu"/><path class="anw2c1jrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:calendar-chevrons-left"} {...others} />);
}

export default Component;
