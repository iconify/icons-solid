import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ae217nbka.css';
import '../../css/u/u154v_8wc.css';
import '../../css/v/v5w4uik1f.css';
import '../../css/s/sdqne7jvy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ae217nbka"/><path class="u154v_8wc"/><path class="v5w4uik1f"/><path class="sdqne7jvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:broom-broken"} {...others} />);
}

export default Component;
