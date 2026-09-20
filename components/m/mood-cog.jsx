import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c5u7aub0q.css';
import '../../css/u/u57inabcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c5u7aub0q"/><path class="u57inabcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-cog"} {...others} />);
}

export default Component;
