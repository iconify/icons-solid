import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lb4b0hbgv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lb4b0hbgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo-social:raft-with-circle"} {...others} />);
}

export default Component;
