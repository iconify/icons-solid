import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s8y023b0u.css';
import '../../css/p/pknklcb3b.css';
import '../../css/t/tqfsqjbfu.css';
import '../../css/m/muvu13hjo.css';
import '../../css/n/n-y7-h-tz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s8y023b0u"/><path class="pknklcb3b"/><path class="tqfsqjbfu"/><path class="muvu13hjo"/><path class="n-y7-h-tz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:upload-track-broken"} {...others} />);
}

export default Component;
