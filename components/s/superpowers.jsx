import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-ue3xmcc.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="s-ue3xmcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:superpowers"} {...others} />);
}

export default Component;
