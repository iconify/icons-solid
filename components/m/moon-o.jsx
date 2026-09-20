import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jv_f63b0r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jv_f63b0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:moon-o"} {...others} />);
}

export default Component;
