import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z7fy42b9u.css';
import '../../css/w/w9-l4pzix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z7fy42b9u"/><circle class="w9-l4pzix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:blinds"} {...others} />);
}

export default Component;
