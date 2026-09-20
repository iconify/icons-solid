import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wt5ganbfh.css';
import '../../css/t/tqowt8nqd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wt5ganbfh"/><path class="tqowt8nqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pallete-2-bold-duotone"} {...others} />);
}

export default Component;
