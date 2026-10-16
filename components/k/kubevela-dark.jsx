import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmakjdpxw.css';

const viewBox = {"width":122.5,"height":122.5};
const content = `<path class="xmakjdpxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kubevela-dark"} {...others} />);
}

export default Component;
