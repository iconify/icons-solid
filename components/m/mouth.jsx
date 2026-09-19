import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rev1gzb0u.css';
import '../../css/e/etgq1od9i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rev1gzb0u"/><path class="etgq1od9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:mouth"} {...others} />);
}

export default Component;
