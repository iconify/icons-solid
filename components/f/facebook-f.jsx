import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nc9m1-b-g.css';

const viewBox = {"width":896,"height":1664};
const content = `<path class="nc9m1-b-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:facebook-f"} {...others} />);
}

export default Component;
