import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdcxh6dac.css';
import '../../css/r/rsf6pbc-s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wdcxh6dac"/><path class="rsf6pbc-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:bot-sparkle-fill-20"} {...others} />);
}

export default Component;
