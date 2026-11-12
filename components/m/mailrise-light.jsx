import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mshnxfvng.css';
import '../../css/j/jh93d6jmw.css';
import '../../css/n/ntjhm5bvt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mshnxfvng"/><path class="jh93d6jmw"/><path class="ntjhm5bvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mailrise-light"} {...others} />);
}

export default Component;
