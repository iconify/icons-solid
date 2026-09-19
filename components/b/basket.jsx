import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/q/q4pq0eb_g.css';
import '../../css/n/nki4i75-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="q4pq0eb_g"/><path class="nki4i75-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:basket"} {...others} />);
}

export default Component;
