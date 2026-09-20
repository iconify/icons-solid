import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eec93pb3i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="eec93pb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:sign-out-alt"} {...others} />);
}

export default Component;
