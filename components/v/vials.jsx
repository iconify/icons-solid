import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/do7mjdbpf.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="do7mjdbpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:vials"} {...others} />);
}

export default Component;
