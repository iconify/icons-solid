import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mcingm8eb.css';
import '../../css/g/ge59m1bsv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mcingm8eb"/><path class="ge59m1bsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:refresh-cw"} {...others} />);
}

export default Component;
