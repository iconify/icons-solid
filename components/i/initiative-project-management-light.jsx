import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1q08elin.css';
import '../../css/l/lqso_0biw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r1q08elin"/><path class="lqso_0biw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:initiative-project-management-light"} {...others} />);
}

export default Component;
