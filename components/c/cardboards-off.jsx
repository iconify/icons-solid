import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v9b8qq7ex.css';
import '../../css/e/e0i-arb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v9b8qq7ex"/><path class="e0i-arb5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cardboards-off"} {...others} />);
}

export default Component;
