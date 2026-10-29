import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkdp2-btv.css';
import '../../css/g/g9wjd3b3c.css';
import '../../css/t/t6vzpjbvb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wkdp2-btv"/><path class="g9wjd3b3c"/><path class="t6vzpjbvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:more-vertical"} {...others} />);
}

export default Component;
