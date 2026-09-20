import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqe-vxb7s.css';
import '../../css/c/c_hslm9lm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="cqe-vxb7s"/><path class="c_hslm9lm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:user-card"} {...others} />);
}

export default Component;
