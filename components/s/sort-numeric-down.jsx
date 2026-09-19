import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hj9qppsak.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hj9qppsak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:sort-numeric-down"} {...others} />);
}

export default Component;
