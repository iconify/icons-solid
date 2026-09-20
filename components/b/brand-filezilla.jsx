import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ukuledbip.css';
import '../../css/j/j7qjn6psg.css';
import '../../css/d/du3ld4bbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ukuledbip"/><path class="j7qjn6psg"/><path class="du3ld4bbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-filezilla"} {...others} />);
}

export default Component;
