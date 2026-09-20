import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvjnoq-4i.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="zvjnoq-4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:tick-solid"} {...others} />);
}

export default Component;
