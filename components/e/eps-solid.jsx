import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gztvgb2-v.css';
import '../../css/x/xqf3i9bis.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gztvgb2-v"/><path clip-rule="evenodd" class="xqf3i9bis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:eps-solid"} {...others} />);
}

export default Component;
