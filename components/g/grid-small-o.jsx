import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy7_qtwkz.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jy7_qtwkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:grid-small-o"} {...others} />);
}

export default Component;
