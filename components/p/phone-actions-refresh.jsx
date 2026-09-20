import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g8pru53ky.css';
import '../../css/e/e9-hq-b0a.css';
import '../../css/w/w886hybwe.css';
import '../../css/b/bbxar80qj.css';
import '../../css/p/pwr26eqha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g8pru53ky"/><path class="e9-hq-b0a"/><path class="w886hybwe"/><path class="bbxar80qj"/><path class="pwr26eqha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:phone-actions-refresh"} {...others} />);
}

export default Component;
