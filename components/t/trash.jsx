import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bywjp-bic.css';
import '../../css/d/dczt4ub4i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bywjp-bic"/><path class="dczt4ub4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:trash"} {...others} />);
}

export default Component;
