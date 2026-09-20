import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/quig9gbhj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="quig9gbhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:actual-budget-dark"} {...others} />);
}

export default Component;
