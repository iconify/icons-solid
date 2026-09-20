import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b103epbdu.css';
import '../../css/v/v4-7tcbbz.css';
import '../../css/j/jtgp3g1cj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b103epbdu"/><path class="v4-7tcbbz"/><path class="jtgp3g1cj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:colota-dark"} {...others} />);
}

export default Component;
