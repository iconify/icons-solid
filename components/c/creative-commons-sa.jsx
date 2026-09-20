import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j7qjn6psg.css';
import '../../css/f/fj905cc0a.css';
import '../../css/f/f_19conzx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j7qjn6psg"/><path class="fj905cc0a"/><path class="f_19conzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:creative-commons-sa"} {...others} />);
}

export default Component;
