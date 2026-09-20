import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xwklj_a9v.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="xwklj_a9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:arrow-down-solid"} {...others} />);
}

export default Component;
