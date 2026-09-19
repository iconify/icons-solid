import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8tswj24l.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="s8tswj24l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:table-cells"} {...others} />);
}

export default Component;
