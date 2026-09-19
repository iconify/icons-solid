import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g6o7mxbbp.css';
import '../../css/t/tlm8zbz-n.css';
import '../../css/l/ldn1gl3gg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g6o7mxbbp"/><path class="tlm8zbz-n"/><path class="ldn1gl3gg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dices"} {...others} />);
}

export default Component;
