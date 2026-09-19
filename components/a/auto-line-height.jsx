import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/m/mhwosdh5o.css';
import '../../css/p/ple3qktap.css';
import '../../css/l/lygwqsb6c.css';
import '../../css/l/lhhoq44ss.css';
import '../../css/w/wsdu17bpq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="mhwosdh5o"/><path class="ple3qktap"/><path class="lygwqsb6c"/><path class="lhhoq44ss"/><path class="wsdu17bpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:auto-line-height"} {...others} />);
}

export default Component;
