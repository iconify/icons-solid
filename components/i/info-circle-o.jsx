import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd_9zuben.css';
import '../../css/k/kd27g93zi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vd_9zuben"/><path class="kd27g93zi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:info-circle-o"} {...others} />);
}

export default Component;
