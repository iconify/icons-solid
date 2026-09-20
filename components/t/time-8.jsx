import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ear-7c2pp.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="ear-7c2pp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:time-8"} {...others} />);
}

export default Component;
