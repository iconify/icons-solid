import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/k/k7mzm_btg.css';
import '../../css/p/pzvif7bca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="k7mzm_btg"/><path class="pzvif7bca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:tv"} {...others} />);
}

export default Component;
