import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tu4ug0b5t.css';
import '../../css/u/u4smql-0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tu4ug0b5t"/><path class="u4smql-0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:folder-arrow-right-fill"} {...others} />);
}

export default Component;
