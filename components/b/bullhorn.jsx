import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xme-khm4k.css';

const viewBox = {"width":1792,"height":1536};
const content = `<path class="xme-khm4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:bullhorn"} {...others} />);
}

export default Component;
