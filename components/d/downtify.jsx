import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czy_-bbfy.css';
import '../../css/w/w5btgvbuy.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="czy_-bbfy"/><path class="w5btgvbuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:downtify"} {...others} />);
}

export default Component;
