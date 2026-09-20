import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o63smnbgd.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="o63smnbgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:scissors-and-comb"} {...others} />);
}

export default Component;
