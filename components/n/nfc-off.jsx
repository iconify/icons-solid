import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mt7pr3ret.css';
import '../../css/k/k6zanzbjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mt7pr3ret"/><path class="k6zanzbjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:nfc-off"} {...others} />);
}

export default Component;
