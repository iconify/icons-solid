import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/t/t0gp_zbys.css';
import '../../css/p/pnv2060yd.css';
import '../../css/x/x07jw33uf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="t0gp_zbys"/><path class="pnv2060yd"/><path class="x07jw33uf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:music"} {...others} />);
}

export default Component;
