import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwmzdrboq.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rwmzdrboq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-flip-horizontal-2-arrow-design-flip-reflect"} {...others} />);
}

export default Component;
