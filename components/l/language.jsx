import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fnr3b6bxe.css';
import '../../css/m/mb5xyyb3q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fnr3b6bxe"/><path class="mb5xyyb3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:language"} {...others} />);
}

export default Component;
