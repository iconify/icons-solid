import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlt9o_vzy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zlt9o_vzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:socialhome-light"} {...others} />);
}

export default Component;
