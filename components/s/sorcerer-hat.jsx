import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7_g8vbyq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n7_g8vbyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sorcerer-hat"} {...others} />);
}

export default Component;
