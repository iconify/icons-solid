import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twe_8u5bv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="twe_8u5bv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pf2etools-dark"} {...others} />);
}

export default Component;
