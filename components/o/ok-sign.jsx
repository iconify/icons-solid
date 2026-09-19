import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtbdm7b9w.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="wtbdm7b9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:ok-sign"} {...others} />);
}

export default Component;
