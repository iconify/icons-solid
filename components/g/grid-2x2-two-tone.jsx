import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dl2nz2boo.css';
import '../../css/r/rg6kv5b8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dl2nz2boo"/><path class="rg6kv5b8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:grid-2x2-two-tone"} {...others} />);
}

export default Component;
