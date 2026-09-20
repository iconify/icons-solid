import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l8dg32zox.css';
import '../../css/k/klb8n8byj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l8dg32zox"/><circle class="klb8n8byj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:toggle"} {...others} />);
}

export default Component;
