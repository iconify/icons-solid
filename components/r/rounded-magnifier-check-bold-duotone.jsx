import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9y477w0i.css';
import '../../css/c/cj0d3vbqu.css';
import '../../css/d/dvn5fybze.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="n9y477w0i"/><path class="cj0d3vbqu"/><path class="dvn5fybze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rounded-magnifier-check-bold-duotone"} {...others} />);
}

export default Component;
