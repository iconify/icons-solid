import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eklwh2bjd.css';
import '../../css/i/i9c7f6brn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eklwh2bjd"/><path class="i9c7f6brn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shorts-pants"} {...others} />);
}

export default Component;
