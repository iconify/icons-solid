import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/onn0kgqkl.css';
import '../../css/w/w8j7v4b8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="onn0kgqkl"/><path class="w8j7v4b8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:soccer-field"} {...others} />);
}

export default Component;
