import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xs6sgts4h.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="xs6sgts4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:support"} {...others} />);
}

export default Component;
