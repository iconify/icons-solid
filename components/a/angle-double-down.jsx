import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hc86bf0gu.css';
import '../../css/h/htispzbmc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hc86bf0gu"/><path class="htispzbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:angle-double-down"} {...others} />);
}

export default Component;
