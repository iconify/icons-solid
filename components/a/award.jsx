import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e9z1x005p.css';
import '../../css/h/hblm8qgxe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e9z1x005p"/><path class="hblm8qgxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:award"} {...others} />);
}

export default Component;
