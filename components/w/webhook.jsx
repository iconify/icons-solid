import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_r3vkblj.css';
import '../../css/e/e0acyedsw.css';
import '../../css/g/gf4i7xbxi.css';
import '../../css/u/ugms1-f5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n_r3vkblj"/><path class="e0acyedsw"/><path class="gf4i7xbxi"/><path class="ugms1-f5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:webhook"} {...others} />);
}

export default Component;
