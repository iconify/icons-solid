import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ip-c2mbtb.css';
import '../../css/m/md286fbip.css';
import '../../css/q/qt4d1naee.css';
import '../../css/h/hvd63zboa.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="ip-c2mbtb"/><g class="md286fbip"><path class="qt4d1naee"/><path class="hvd63zboa"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:npxs"} {...others} />);
}

export default Component;
