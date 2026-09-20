import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vxu8j1bdd.css';
import '../../css/i/i5ej2fbim.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vxu8j1bdd"/><path class="i5ej2fbim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:folders"} {...others} />);
}

export default Component;
