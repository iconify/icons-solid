import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mamb4q5gb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mamb4q5gb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:backspace-a"} {...others} />);
}

export default Component;
