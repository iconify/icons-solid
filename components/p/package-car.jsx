import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/a/a9vsgkbga.css';
import '../../css/g/ghufp1bsu.css';
import '../../css/r/rr_rycfur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="a9vsgkbga"/><circle class="ghufp1bsu"/><path class="rr_rycfur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:package-car"} {...others} />);
}

export default Component;
