import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipsj9zfzw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ipsj9zfzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:layout-rtl"} {...others} />);
}

export default Component;
