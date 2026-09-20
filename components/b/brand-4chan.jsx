import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/unn76bgmm.css';
import '../../css/t/tizophb3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="unn76bgmm"/><path class="tizophb3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-4chan"} {...others} />);
}

export default Component;
