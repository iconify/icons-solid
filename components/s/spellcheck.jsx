import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_1m5nb6h.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="o_1m5nb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:spellcheck"} {...others} />);
}

export default Component;
