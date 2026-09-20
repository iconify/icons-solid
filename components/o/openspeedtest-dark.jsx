import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tgfd5rbjk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tgfd5rbjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openspeedtest-dark"} {...others} />);
}

export default Component;
