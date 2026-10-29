import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yyswddp1t.css';
import '../../css/k/k26yyvc5e.css';
import '../../css/h/ha-6yibsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yyswddp1t"/><path class="k26yyvc5e wm-a"/><path class="ha-6yibsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:footprints-duo"} {...others} />);
}

export default Component;
