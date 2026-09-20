import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlyez0tgf.css';
import '../../css/d/doz4ehbjz.css';
import '../../css/w/wa_6v2bmy.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wlyez0tgf"/><path class="doz4ehbjz"/><path class="wa_6v2bmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:inbox"} {...others} />);
}

export default Component;
