import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/evge9_brb.css';
import '../../css/j/jdicwcndp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="evge9_brb"/><path class="jdicwcndp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:solidcraft-dark"} {...others} />);
}

export default Component;
