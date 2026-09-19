import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pm4e9_79y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pm4e9_79y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-up-arrow-circle"} {...others} />);
}

export default Component;
