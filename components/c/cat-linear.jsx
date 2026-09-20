import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q53cqkb9s.css';
import '../../css/s/siriotbvy.css';
import '../../css/z/zatv6srbm.css';
import '../../css/g/gko7rfkoi.css';
import '../../css/t/tujat4bck.css';
import '../../css/u/u3n7tt0me.css';
import '../../css/j/jt27a2bcl.css';
import '../../css/x/xn34o50cy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="q53cqkb9s"/><path class="siriotbvy"/><path class="zatv6srbm"/><path class="gko7rfkoi"/><path class="tujat4bck"/><path class="u3n7tt0me"/><path class="jt27a2bcl"/><path class="xn34o50cy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cat-linear"} {...others} />);
}

export default Component;
