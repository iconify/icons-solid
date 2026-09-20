import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n04szjpnk.css';
import '../../css/u/uckd2bc1w.css';
import '../../css/g/gad5smwwy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n04szjpnk"/><path class="uckd2bc1w"/><path class="gad5smwwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-gumroad"} {...others} />);
}

export default Component;
