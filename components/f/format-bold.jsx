import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdlpnnk8a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pdlpnnk8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:format-bold"} {...others} />);
}

export default Component;
