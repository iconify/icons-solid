import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jrjc9qesx.css';
import '../../css/m/mio52ig2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jrjc9qesx"/><circle class="mio52ig2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:user-round-x"} {...others} />);
}

export default Component;
