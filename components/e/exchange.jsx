import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x150v0i1o.css';
import '../../css/f/flv6rfrvu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x150v0i1o"/><path class="flv6rfrvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:exchange"} {...others} />);
}

export default Component;
