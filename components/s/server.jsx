import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzge0abfz.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="pzge0abfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:server"} {...others} />);
}

export default Component;
