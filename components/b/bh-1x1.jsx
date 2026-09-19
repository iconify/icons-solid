import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/il691tbvq.css';
import '../../css/u/utka4rg2k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="il691tbvq"/><path class="utka4rg2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bh-1x1"} {...others} />);
}

export default Component;
