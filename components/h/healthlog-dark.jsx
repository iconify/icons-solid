import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2ftmugmu.css';
import '../../css/t/t2zrok28c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x2ftmugmu"/><path class="t2zrok28c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:healthlog-dark"} {...others} />);
}

export default Component;
