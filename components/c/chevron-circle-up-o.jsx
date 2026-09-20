import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5o--747c.css';
import '../../css/x/xcy-b-u_j.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l5o--747c"/><path class="xcy-b-u_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:chevron-circle-up-o"} {...others} />);
}

export default Component;
