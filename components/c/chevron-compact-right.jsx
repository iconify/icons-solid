import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/msmt2ql3o.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="msmt2ql3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:chevron-compact-right"} {...others} />);
}

export default Component;
