import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohbpjk02c.css';

const viewBox = {"width":630,"height":700};
const content = `<path class="ohbpjk02c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"il:arrow-down"} {...others} />);
}

export default Component;
