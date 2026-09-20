import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o7zvznbqs.css';
import '../../css/y/yj75rjwzt.css';
import '../../css/e/ec3kxyyka.css';
import '../../css/v/vt56ykbqn.css';
import '../../css/g/gfiw8tbys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o7zvznbqs"/><path class="yj75rjwzt"/><path class="ec3kxyyka"/><path class="vt56ykbqn"/><path class="gfiw8tbys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:shopping-product"} {...others} />);
}

export default Component;
