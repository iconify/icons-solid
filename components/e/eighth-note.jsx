import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ajlzracvz.css';
import '../../css/c/c55ag9btm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ajlzracvz"/><circle class="c55ag9btm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:eighth-note"} {...others} />);
}

export default Component;
