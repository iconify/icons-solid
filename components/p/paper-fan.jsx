import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e-11s9buz.css';
import '../../css/s/sejejabuk.css';
import '../../css/e/etat2sb9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="e-11s9buz wm-k"/><path class="sejejabuk wm-s"/><path class="etat2sb9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:paper-fan"} {...others} />);
}

export default Component;
