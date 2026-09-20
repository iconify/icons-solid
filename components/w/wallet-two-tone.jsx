import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zyz40f3pg.css';
import '../../css/p/pnav-achm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zyz40f3pg"/><path class="pnav-achm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:wallet-two-tone"} {...others} />);
}

export default Component;
