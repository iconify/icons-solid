import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lf371-bve.css';
import '../../css/p/pu-_ysbmq.css';
import '../../css/n/nrfg08b3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lf371-bve"/><path class="pu-_ysbmq"/><path class="nrfg08b3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:color-swatch-off"} {...others} />);
}

export default Component;
