import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e-z1p3u-a.css';
import '../../css/w/wk09lfx3q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e-z1p3u-a"/><path class="wk09lfx3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:beer-off"} {...others} />);
}

export default Component;
