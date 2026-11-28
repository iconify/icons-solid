import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hclm8l7ra.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yhy4dvn5l.css';
import '../../css/y/yidc_llwe.css';
import '../../css/p/ps8qtyblt.css';
import '../../css/a/ankpjzb4q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hclm8l7ra secondary"/><g class="dt0cm9dhy primary"><path class="yhy4dvn5l"/><circle class="yidc_llwe"/><path class="ps8qtyblt"/><path class="ankpjzb4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:contact-duo"} {...others} />);
}

export default Component;
