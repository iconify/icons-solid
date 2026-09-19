import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wzq7di5dx.css';
import '../../css/i/ilo9ddc7n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wzq7di5dx"/><path class="ilo9ddc7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hard-hat"} {...others} />);
}

export default Component;
