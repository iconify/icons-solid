import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hctyz9b5p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hctyz9b5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:verticle-right"} {...others} />);
}

export default Component;
