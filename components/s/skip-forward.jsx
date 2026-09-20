import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q771knb7e.css';
import '../../css/w/ws1d0fbts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="icon-tabler nrj6p8qat"><path class="q771knb7e"/><path class="ws1d0fbts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:skip-forward"} {...others} />);
}

export default Component;
