import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkaxou.css';
import '../../css/t/t5pxry.css';
import '../../css/z/zxndow.css';
import '../../css/l/li54_l.css';
import '../../css/y/y4wbml.css';
import '../../css/i/icc8up.css';
import '../../css/b/botfzx.css';
import '../../css/v/vuwhgb.css';
import '../../css/s/so-from-64.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGUMqceprV"><path class="lkaxou t5pxry zxndow"/><path class="li54_l t5pxry y4wbml zxndow"/><path class="icc8up"/></mask></defs><path mask="url(#SVGUMqceprV)" class="botfzx"/><path class="t5pxry vuwhgb y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:briefcase-check-filled"} {...others} />);
}

export default Component;
