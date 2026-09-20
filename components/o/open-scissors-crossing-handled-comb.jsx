import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttle3lbib.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ttle3lbib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:open-scissors-crossing-handled-comb"} {...others} />);
}

export default Component;
