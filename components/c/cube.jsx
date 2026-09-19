import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1w0_pbtg.css';

const viewBox = {"width":1664,"height":1664};
const content = `<path class="p1w0_pbtg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:cube"} {...others} />);
}

export default Component;
