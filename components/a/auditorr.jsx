import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7audcctd.css';
import '../../css/p/pah233ash.css';
import '../../css/w/whx3_cfkf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f7audcctd"/><path class="pah233ash"/><path class="whx3_cfkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:auditorr"} {...others} />);
}

export default Component;
