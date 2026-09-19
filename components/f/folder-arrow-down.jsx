import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rld_-7kyk.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="rld_-7kyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:folder-arrow-down"} {...others} />);
}

export default Component;
