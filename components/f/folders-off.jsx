import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l5zlzk4nh.css';
import '../../css/r/rv-h5hxws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l5zlzk4nh"/><path class="rv-h5hxws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:folders-off"} {...others} />);
}

export default Component;
