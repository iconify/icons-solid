import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/ds-e20blm.css';
import '../../css/a/ah_l9shif.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ds-e20blm"/><path class="ah_l9shif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:corner-right-down-double"} {...others} />);
}

export default Component;
