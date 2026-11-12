import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhbb05v8s.css';
import '../../css/n/n-mc4deaj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zhbb05v8s"/><path class="n-mc4deaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:aviato-dark"} {...others} />);
}

export default Component;
