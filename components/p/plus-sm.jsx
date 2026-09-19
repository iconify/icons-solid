import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uh3xl_ida.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="uh3xl_ida"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:plus-sm"} {...others} />);
}

export default Component;
