import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl72jlb_c.css';
import '../../css/n/n6ltouozm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nl72jlb_c"/><path class="n6ltouozm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:power"} {...others} />);
}

export default Component;
