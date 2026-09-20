import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xd5ctr80z.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="xd5ctr80z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:data-type-double"} {...others} />);
}

export default Component;
