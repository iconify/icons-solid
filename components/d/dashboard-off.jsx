import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ou-7accxf.css';
import '../../css/w/ww9nj8y8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ou-7accxf"/><path class="ww9nj8y8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:dashboard-off"} {...others} />);
}

export default Component;
