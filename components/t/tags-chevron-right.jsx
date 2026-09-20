import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vs4qv9b5t.css';
import '../../css/a/akttj88fr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vs4qv9b5t"/><path class="akttj88fr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:tags-chevron-right"} {...others} />);
}

export default Component;
