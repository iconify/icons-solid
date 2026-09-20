import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-b8rwb9q.css';
import '../../css/l/llyqf3b8e.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="o-b8rwb9q"/><path class="llyqf3b8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lingarr"} {...others} />);
}

export default Component;
