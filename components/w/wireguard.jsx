import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njp1edb4f.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="njp1edb4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:wireguard"} {...others} />);
}

export default Component;
