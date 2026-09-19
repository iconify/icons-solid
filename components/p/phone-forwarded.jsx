import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b13lxxb-j.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="b13lxxb-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:phone-forwarded"} {...others} />);
}

export default Component;
