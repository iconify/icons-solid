import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ezryshb8k.css';
import '../../css/x/x4gn8ly4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ezryshb8k"/><path class="x4gn8ly4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:cocktail"} {...others} />);
}

export default Component;
