import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iu0ww8brg.css';
import '../../css/z/z02y1xbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iu0ww8brg"/><path class="z02y1xbpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-laravel"} {...others} />);
}

export default Component;
