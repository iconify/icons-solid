import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8qmtb0vg.css';
import '../../css/w/wvqn8smga.css';
import '../../css/l/l85zn4b0m.css';
import '../../css/t/tqx96999q.css';
import '../../css/o/otjwedhbq.css';
import '../../css/n/n-inml2tz.css';

const viewBox = {"width":256,"height":256};
const content = `<g transform="scale(3.77953)" class="i8qmtb0vg"><rect class="wvqn8smga"/><path class="l85zn4b0m"/><path class="tqx96999q"/><path class="otjwedhbq"/><circle class="n-inml2tz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:image"} {...others} />);
}

export default Component;
