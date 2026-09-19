import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocod4qb4r.css';
import '../../css/x/xyfijqb0l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ocod4qb4r"/><path class="xyfijqb0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:download-outline"} {...others} />);
}

export default Component;
