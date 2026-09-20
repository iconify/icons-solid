import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/byaevlepd.css';
import '../../css/x/x-y_kqbjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="byaevlepd"/><path class="x-y_kqbjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bar-chart-horizontal-start-duotone"} {...others} />);
}

export default Component;
