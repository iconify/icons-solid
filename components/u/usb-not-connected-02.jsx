import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j4besrixy.css';
import '../../css/o/o9ghvyl0a.css';
import '../../css/s/s_auppb6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j4besrixy"/><path class="o9ghvyl0a"/><path class="s_auppb6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:usb-not-connected-02"} {...others} />);
}

export default Component;
