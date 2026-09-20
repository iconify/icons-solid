import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dasur6gli.css';
import '../../css/d/ds-zzgbaf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dasur6gli"/><path class="ds-zzgbaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:gift"} {...others} />);
}

export default Component;
