import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jhu24nmxs.css';
import '../../css/z/zsle2qbvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jhu24nmxs"/><path class="zsle2qbvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:picture-in-picture"} {...others} />);
}

export default Component;
