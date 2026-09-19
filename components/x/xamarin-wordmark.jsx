import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uz7n-pn_o.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="uz7n-pn_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:xamarin-wordmark"} {...others} />);
}

export default Component;
