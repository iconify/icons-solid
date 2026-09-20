import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b0nahy8lo.css';
import '../../css/r/rh0cep7rt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b0nahy8lo"/><path class="rh0cep7rt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-left-dashed-panel-duotone"} {...others} />);
}

export default Component;
