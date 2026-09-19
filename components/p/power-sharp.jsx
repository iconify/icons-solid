import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lloikpa_g.css';
import '../../css/g/glhuhnb6v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lloikpa_g"/><path class="glhuhnb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:power-sharp"} {...others} />);
}

export default Component;
