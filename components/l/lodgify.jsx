import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yzmyd9baj.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="yzmyd9baj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:lodgify"} {...others} />);
}

export default Component;
