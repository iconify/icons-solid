import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iwds29bqs.css';
import '../../css/z/z_97-pnbl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iwds29bqs"/><path class="z_97-pnbl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:map-pin-flame"} {...others} />);
}

export default Component;
