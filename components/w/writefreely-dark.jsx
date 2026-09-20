import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blkq5y2_d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="blkq5y2_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:writefreely-dark"} {...others} />);
}

export default Component;
