import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rapo_tbbs.css';

const viewBox = {"width":2208,"height":1664};
const content = `<path class="rapo_tbbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:multi-arrow"} {...others} />);
}

export default Component;
