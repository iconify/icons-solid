import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8b_w57wp.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="z8b_w57wp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:cheese-remix"} {...others} />);
}

export default Component;
