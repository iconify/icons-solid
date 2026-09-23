import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nn3_43btn.css';
import '../../css/j/j0phls-he.css';
import '../../css/w/wqb631yja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nn3_43btn"/><path class="j0phls-he"/><path class="wqb631yja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:wand-sparkles-duotone"} {...others} />);
}

export default Component;
