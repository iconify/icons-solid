import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3-4pu7qp.css';
import '../../css/m/mkmxqcb8u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s3-4pu7qp"/><path class="mkmxqcb8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:curator-bookmarks"} {...others} />);
}

export default Component;
