import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fxly0nb1i.css';
import '../../css/c/c2v7f4d8i.css';
import '../../css/h/hws-kvb8q.css';
import '../../css/b/bdly9ccqg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fxly0nb1i"/><path class="c2v7f4d8i"/><path class="hws-kvb8q"/><path class="bdly9ccqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:video-file-duotone-line"} {...others} />);
}

export default Component;
