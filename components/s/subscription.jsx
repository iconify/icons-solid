import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i3g92hbhb.css';
import '../../css/l/l3qz0-bng.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i3g92hbhb"/><path class="l3qz0-bng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:subscription"} {...others} />);
}

export default Component;
