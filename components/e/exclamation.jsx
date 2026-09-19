import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlubp1u1f.css';

const viewBox = {"width":448,"height":1408};
const content = `<path class="wlubp1u1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:exclamation"} {...others} />);
}

export default Component;
