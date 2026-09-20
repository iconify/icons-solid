import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwn4y6b1b.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="nwn4y6b1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:bowling-alt1"} {...others} />);
}

export default Component;
