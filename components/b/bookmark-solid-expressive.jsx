import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0r65vbeq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o0r65vbeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:bookmark-solid-expressive"} {...others} />);
}

export default Component;
