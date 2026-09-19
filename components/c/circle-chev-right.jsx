import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi9qgerqe.css';
import '../../css/t/t7bnoab5n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bi9qgerqe"/><path class="t7bnoab5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:circle-chev-right"} {...others} />);
}

export default Component;
