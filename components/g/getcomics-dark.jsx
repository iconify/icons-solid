import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5zt96c_a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t5zt96c_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:getcomics-dark"} {...others} />);
}

export default Component;
