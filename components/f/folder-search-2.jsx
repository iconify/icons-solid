import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hw7_it2md.css';
import '../../css/e/e9j57ubtw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="hw7_it2md"/><path class="e9j57ubtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:folder-search-2"} {...others} />);
}

export default Component;
