import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hlnn9u8yp.css';
import '../../css/h/hm7acebzo.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/a/aoc4qh-uh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hlnn9u8yp"/><path class="hm7acebzo"/><circle class="h_tsn8bxt"/><path class="aoc4qh-uh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:radar"} {...others} />);
}

export default Component;
