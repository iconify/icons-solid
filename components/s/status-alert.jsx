import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ceonq4b9c.css';

const viewBox = {"width":12,"height":12};
const content = `<path clip-rule="evenodd" class="ceonq4b9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:status-alert"} {...others} />);
}

export default Component;
