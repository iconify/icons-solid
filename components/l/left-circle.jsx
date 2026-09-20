import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aiz2zc2mh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aiz2zc2mh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:left-circle"} {...others} />);
}

export default Component;
