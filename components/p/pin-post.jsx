import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxfn-h1ce.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qxfn-h1ce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:pin-post"} {...others} />);
}

export default Component;
