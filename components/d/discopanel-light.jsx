import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/broyakp0p.css';
import '../../css/p/p1n-ydbvg.css';
import '../../css/p/pwj4ki62q.css';
import '../../css/g/g38ac68gp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="broyakp0p"/><path class="p1n-ydbvg"/><path class="pwj4ki62q"/><path class="g38ac68gp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:discopanel-light"} {...others} />);
}

export default Component;
