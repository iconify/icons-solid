import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zcmlbv4_v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zcmlbv4_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:external-link-line"} {...others} />);
}

export default Component;
