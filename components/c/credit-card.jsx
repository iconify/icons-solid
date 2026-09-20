import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pa5fotm2d.css';
import '../../css/w/w__f9-ryl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pa5fotm2d"/><path class="w__f9-ryl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:credit-card"} {...others} />);
}

export default Component;
