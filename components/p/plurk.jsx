import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izwngpo4z.css';
import '../../css/w/w8fd4ubay.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="izwngpo4z"/><path class="w8fd4ubay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:plurk"} {...others} />);
}

export default Component;
