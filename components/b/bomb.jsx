import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dad19185s.css';
import '../../css/i/ib27nkbms.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dad19185s"/><path class="ib27nkbms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:bomb"} {...others} />);
}

export default Component;
