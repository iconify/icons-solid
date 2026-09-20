import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqx-vr3bx.css';
import '../../css/m/mj3ha3b2h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kqx-vr3bx"/><path class="mj3ha3b2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:twin-col-select"} {...others} />);
}

export default Component;
