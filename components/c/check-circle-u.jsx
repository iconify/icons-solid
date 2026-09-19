import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmfmj4yhr.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="tmfmj4yhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:check-circle-u"} {...others} />);
}

export default Component;
