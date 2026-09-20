import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uas_wub4v.css';
import '../../css/h/hoehcpaco.css';
import '../../css/n/n4j0dbcil.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uas_wub4v"/><path class="hoehcpaco"/><path class="n4j0dbcil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:window-maximize"} {...others} />);
}

export default Component;
