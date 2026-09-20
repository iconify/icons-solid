import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yljdd-biq.css';
import '../../css/c/cqlg1elow.css';
import '../../css/m/mqymo7s1u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yljdd-biq"/><path class="cqlg1elow"/><path class="mqymo7s1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:radicle-light"} {...others} />);
}

export default Component;
