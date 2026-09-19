import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5a8f4ihf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z5a8f4ihf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:bank"} {...others} />);
}

export default Component;
