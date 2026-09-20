import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x3hq8db9d.css';
import '../../css/k/kjtwc380d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x3hq8db9d"/><path class="kjtwc380d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cap-rounded"} {...others} />);
}

export default Component;
