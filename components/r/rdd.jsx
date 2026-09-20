import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/stp3e0b8u.css';
import '../../css/j/jmadxbr5l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="stp3e0b8u"/><path class="jmadxbr5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:rdd"} {...others} />);
}

export default Component;
