import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eih4zpioh.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="eih4zpioh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:briefcase-with-venus-mars"} {...others} />);
}

export default Component;
