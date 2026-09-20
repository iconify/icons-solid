import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/ld5x_6a-q.css';
import '../../css/h/h8g36l7qt.css';
import '../../css/i/i8vpebqdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ld5x_6a-q"/><path class="h8g36l7qt"/><path class="i8vpebqdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:print"} {...others} />);
}

export default Component;
