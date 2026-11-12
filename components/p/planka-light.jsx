import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zk4zuub3q.css';
import '../../css/z/ziuppeksn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zk4zuub3q"/><path class="ziuppeksn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:planka-light"} {...others} />);
}

export default Component;
