import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/antp0sy-n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="antp0sy-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:minus-square-o"} {...others} />);
}

export default Component;
