import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wuukrub9f.css';
import '../../css/h/h1a7cab_d.css';
import '../../css/l/l96x703eu.css';
import '../../css/a/azi5c4blo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wuukrub9f"/><path class="h1a7cab_d"/><path class="l96x703eu"/><path class="azi5c4blo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:sliders-h"} {...others} />);
}

export default Component;
