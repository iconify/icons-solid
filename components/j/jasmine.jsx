import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpc7ahhih.css';
import '../../css/i/i8z3n6v9x.css';
import '../../css/y/yf4mwmb-p.css';
import '../../css/g/g2aqx6i7m.css';

const viewBox = {"width":256,"height":255};
const content = `<g class="kpc7ahhih"><path class="i8z3n6v9x"/><path class="yf4mwmb-p"/><path class="g2aqx6i7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:jasmine"} {...others} />);
}

export default Component;
