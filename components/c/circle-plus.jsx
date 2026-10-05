import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/whd92oi0d.css';
import '../../css/a/aud40yyqp.css';
import '../../css/i/ikl0agb7y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="whd92oi0d"/><path class="aud40yyqp"/><path class="ikl0agb7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:circle-plus"} {...others} />);
}

export default Component;
