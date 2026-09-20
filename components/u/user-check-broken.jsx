import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a8neukw-z.css';
import '../../css/a/ab350_zld.css';
import '../../css/x/x3z2s0btf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="a8neukw-z"/><path class="ab350_zld"/><path class="x3z2s0btf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-check-broken"} {...others} />);
}

export default Component;
