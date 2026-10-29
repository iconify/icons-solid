import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x15zte28m.css';
import '../../css/t/te7ulccft.css';
import '../../css/i/i_7phq4mg.css';
import '../../css/n/n8w75gbzh.css';
import '../../css/i/ige9nwfhs.css';
import '../../css/f/f4uwtdbaj.css';
import '../../css/l/lv-f21bzq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow x15zte28m"/><path class="te7ulccft wm-k"/><path class="i_7phq4mg wm-k"/><path class="n8w75gbzh wm-k"/><path class="ige9nwfhs wm-k"/><path class="f4uwtdbaj wm-k"/><path class="lv-f21bzq wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:bookmark"} {...others} />);
}

export default Component;
