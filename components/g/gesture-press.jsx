import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkws4h7dx.css';
import '../../css/e/eai6xnsxw.css';
import '../../css/p/p19juemcf.css';
import '../../css/v/vprkdwbwa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wkws4h7dx"/><path class="eai6xnsxw"/><path class="p19juemcf"/><path class="vprkdwbwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:gesture-press"} {...others} />);
}

export default Component;
