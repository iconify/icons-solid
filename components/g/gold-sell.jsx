import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a16vnybjj.css';
import '../../css/g/gp0egaclj.css';
import '../../css/x/xxdfd3c6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a16vnybjj"/><circle class="gp0egaclj"/><path class="xxdfd3c6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:gold-sell"} {...others} />);
}

export default Component;
