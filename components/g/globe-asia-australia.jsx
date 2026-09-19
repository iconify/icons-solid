import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-9lwzflx.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="a-9lwzflx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:globe-asia-australia"} {...others} />);
}

export default Component;
