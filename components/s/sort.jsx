import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3gq70bqw.css';
import '../../css/v/v3xbnm0nn.css';
import '../../css/w/wdvky-a2y.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="l3gq70bqw"/><path class="v3xbnm0nn"/><path class="wdvky-a2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sort"} {...others} />);
}

export default Component;
