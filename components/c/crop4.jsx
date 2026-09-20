import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x1b0xhewq.css';
import '../../css/l/l5s28fb2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x1b0xhewq"/><path class="l5s28fb2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:crop4"} {...others} />);
}

export default Component;
