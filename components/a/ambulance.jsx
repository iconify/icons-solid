import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq_9v787t.css';
import '../../css/v/vp-9qc54u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="eq_9v787t"/><path class="vp-9qc54u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:ambulance"} {...others} />);
}

export default Component;
