import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gxsoq6bke.css';
import '../../css/v/vyaswcbsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gxsoq6bke"/><path class="vyaswcbsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ticket-slash"} {...others} />);
}

export default Component;
