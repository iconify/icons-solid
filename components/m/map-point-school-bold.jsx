import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btkhb9bet.css';
import '../../css/l/lgjjwacpx.css';
import '../../css/y/yhqqnybey.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="btkhb9bet"/><path clip-rule="evenodd" class="lgjjwacpx"/><path class="yhqqnybey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-point-school-bold"} {...others} />);
}

export default Component;
