import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oju_u6b2m.css';
import '../../css/g/gmudgccjr.css';
import '../../css/g/g5uyykbzd.css';
import '../../css/v/v98o_514s.css';
import '../../css/y/y6mo_fb7t.css';
import '../../css/v/v8k1krb4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="oju_u6b2m wm-shadow"/><path class="gmudgccjr"/><path class="g5uyykbzd"/><path class="v98o_514s"/><path class="y6mo_fb7t"/><path class="v8k1krb4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cooking-pot"} {...others} />);
}

export default Component;
