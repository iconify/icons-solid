import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwe3k093t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pwe3k093t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:paint-brush-alt"} {...others} />);
}

export default Component;
