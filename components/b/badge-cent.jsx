import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mtka_hdsi.css';
import '../../css/h/hgtktwu3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mtka_hdsi"/><path class="hgtktwu3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:badge-cent"} {...others} />);
}

export default Component;
