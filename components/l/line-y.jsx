import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yljak-bdc.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="yljak-bdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:line-y"} {...others} />);
}

export default Component;
