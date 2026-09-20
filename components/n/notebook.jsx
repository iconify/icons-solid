import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/d/dw6xl3bwt.css';
import '../../css/p/pzzg-sbsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="dw6xl3bwt"/><path class="pzzg-sbsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:notebook"} {...others} />);
}

export default Component;
