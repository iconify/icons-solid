import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g30qnl7bh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="g30qnl7bh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:heptagon-half"} {...others} />);
}

export default Component;
