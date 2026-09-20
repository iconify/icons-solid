import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pn3r5cchg.css';
import '../../css/z/z8g2jgblp.css';
import '../../css/y/yn-57bboo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="pn3r5cchg"/><path class="z8g2jgblp"/><circle class="yn-57bboo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:divide"} {...others} />);
}

export default Component;
