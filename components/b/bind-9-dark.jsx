import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxc3l3bcz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hxc3l3bcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bind-9-dark"} {...others} />);
}

export default Component;
