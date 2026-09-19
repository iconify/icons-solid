import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjmase5-m.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="bjmase5-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:cog-8-tooth"} {...others} />);
}

export default Component;
