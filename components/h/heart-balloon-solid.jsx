import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/afc_sacpd.css';
import '../../css/g/gfj5pnbju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="afc_sacpd"/><path class="gfj5pnbju wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heart-balloon-solid"} {...others} />);
}

export default Component;
