import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fn3rdabgq.css';
import '../../css/n/nmv6y45kx.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="fn3rdabgq"/><path class="nmv6y45kx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:compass-sharp"} {...others} />);
}

export default Component;
