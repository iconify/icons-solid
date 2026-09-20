import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svvswiuur.css';
import '../../css/c/ca92hcc9h.css';
import '../../css/n/n5strteld.css';
import '../../css/x/xicz9w-yf.css';
import '../../css/y/ytymq7bzg.css';
import '../../css/y/ya44hybpz.css';
import '../../css/m/m5d7m6tzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="svvswiuur"/><path class="ca92hcc9h"/><path class="n5strteld"/><path class="xicz9w-yf"/><path class="ytymq7bzg"/><path class="ya44hybpz"/><path class="m5d7m6tzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:business-pearl"} {...others} />);
}

export default Component;
