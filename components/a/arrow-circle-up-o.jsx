import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcy-b-u_j.css';
import '../../css/u/u-e1w8b5u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xcy-b-u_j"/><path class="u-e1w8b5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:arrow-circle-up-o"} {...others} />);
}

export default Component;
