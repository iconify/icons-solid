import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jyqwv_kza.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jyqwv_kza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cilium-dark"} {...others} />);
}

export default Component;
