import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ztfe2y7ay.css';
import '../../css/u/u_faizb-m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ztfe2y7ay"/><path class="u_faizb-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:moodle"} {...others} />);
}

export default Component;
