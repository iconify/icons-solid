import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ocos3pbek.css';
import '../../css/k/kf0_gw6sp.css';
import '../../css/m/moyuhzd7x.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/o/o7t96_w7i.css';
import '../../css/l/l-47ud-_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ocos3pbek"/><path class="kf0_gw6sp"/><path class="moyuhzd7x"/><g class="av3m8fbrw"><path class="o7t96_w7i"/><path class="l-47ud-_g"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:dvd"} {...others} />);
}

export default Component;
