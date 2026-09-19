import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3n_o_sbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="more-horizontal-outline"><path class="Vector w3n_o_sbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:more-horizontal-outline"} {...others} />);
}

export default Component;
