import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzuuxyv1b.css';
import '../../css/e/e9w0n4t1u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rzuuxyv1b"/><path class="e9w0n4t1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:movary"} {...others} />);
}

export default Component;
