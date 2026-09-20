import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3t3gjbsn.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="b3t3gjbsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:crossing-rail-road"} {...others} />);
}

export default Component;
