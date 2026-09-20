import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/soqjqnbpb.css';
import '../../css/y/yy8y34gky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="soqjqnbpb"/><path class="yy8y34gky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:dual-screen"} {...others} />);
}

export default Component;
