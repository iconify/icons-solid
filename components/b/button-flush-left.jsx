import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zalphcmjo.css';
import '../../css/f/fqa96gb_q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zalphcmjo"/><path class="fqa96gb_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:button-flush-left"} {...others} />);
}

export default Component;
