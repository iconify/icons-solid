import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v7g32rbre.css';
import '../../css/c/cpsjjkueh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v7g32rbre"/><path class="cpsjjkueh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-no-axes-combined-sparkles-fill"} {...others} />);
}

export default Component;
