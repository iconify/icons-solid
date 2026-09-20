import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bngho9abm.css';
import '../../css/x/xmy3efaud.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bngho9abm"/><path class="xmy3efaud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-plus"} {...others} />);
}

export default Component;
