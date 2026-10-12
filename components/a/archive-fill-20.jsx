import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zf7tsiqra.css';
import '../../css/e/eugsobcjx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zf7tsiqra"/><path class="eugsobcjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:archive-fill-20"} {...others} />);
}

export default Component;
