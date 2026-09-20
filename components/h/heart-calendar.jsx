import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/s/sfewyeb1r.css';
import '../../css/g/grqi0xbwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="sfewyeb1r"/><path class="grqi0xbwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:heart-calendar"} {...others} />);
}

export default Component;
