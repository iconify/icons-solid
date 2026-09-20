import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wc3oh_kgg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wc3oh_kgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:cable-barrier"} {...others} />);
}

export default Component;
