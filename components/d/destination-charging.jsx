import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x86vvbccz.css';
import '../../css/m/mz-ceqb_o.css';
import '../../css/d/d9rb_abpc.css';
import '../../css/j/jzrv5hbuc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x86vvbccz"/><rect class="mz-ceqb_o"/><path class="d9rb_abpc"/><path class="jzrv5hbuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:destination-charging"} {...others} />);
}

export default Component;
