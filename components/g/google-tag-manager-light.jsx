import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz7iaspvb.css';
import '../../css/y/y2h-ot9zd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oz7iaspvb"/><path class="y2h-ot9zd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-tag-manager-light"} {...others} />);
}

export default Component;
