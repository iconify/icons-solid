import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu2j1g89h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mu2j1g89h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:girl-sad-hunappy"} {...others} />);
}

export default Component;
