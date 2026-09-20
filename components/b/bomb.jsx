import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3vs7td1h.css';
import '../../css/o/o2a1_1bbp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="t3vs7td1h"/><path class="o2a1_1bbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:bomb"} {...others} />);
}

export default Component;
