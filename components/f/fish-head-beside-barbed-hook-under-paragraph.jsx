import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kfoz3-mbt.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kfoz3-mbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:fish-head-beside-barbed-hook-under-paragraph"} {...others} />);
}

export default Component;
