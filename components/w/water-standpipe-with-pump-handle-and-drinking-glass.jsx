import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hb0hgobzl.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hb0hgobzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:water-standpipe-with-pump-handle-and-drinking-glass"} {...others} />);
}

export default Component;
