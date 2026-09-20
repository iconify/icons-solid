import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/n/nf6zy_b6r.css';
import '../../css/m/mr4ysib0c.css';
import '../../css/e/em93k3h0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="nf6zy_b6r"/><path class="mr4ysib0c"/><path class="em93k3h0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-alt-add"} {...others} />);
}

export default Component;
