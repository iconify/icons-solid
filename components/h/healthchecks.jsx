import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lryz7mrcd.css';
import '../../css/r/rcmt1r3hl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lryz7mrcd"/><path class="rcmt1r3hl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:healthchecks"} {...others} />);
}

export default Component;
