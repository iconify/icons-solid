import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k-h81epps.css';
import '../../css/r/rn56kzbis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k-h81epps"/><path class="rn56kzbis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:automatic-gearbox"} {...others} />);
}

export default Component;
