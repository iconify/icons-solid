import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptpts-iao.css';
import '../../css/k/kjhhmyhjp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ptpts-iao"/><path class="kjhhmyhjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-text-input-area-2"} {...others} />);
}

export default Component;
