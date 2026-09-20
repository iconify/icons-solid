import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7_p-eb5l.css';
import '../../css/l/lx1hlcb1u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t7_p-eb5l"/><path class="lx1hlcb1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hyperdx"} {...others} />);
}

export default Component;
