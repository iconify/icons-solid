import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lf_ejzkya.css';

const viewBox = {"width":1792,"height":1408};
const content = `<path class="lf_ejzkya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:window-minimize"} {...others} />);
}

export default Component;
