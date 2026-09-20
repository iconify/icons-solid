import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/u/uwas5gbbp.css';
import '../../css/e/ez1x61b2a.css';
import '../../css/o/o_socdebe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="dtl23o_xq"/><path class="uwas5gbbp"/><circle class="ez1x61b2a"/><path class="o_socdebe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-block-rounded-broken"} {...others} />);
}

export default Component;
