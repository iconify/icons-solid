import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vz9ue_anp.css';
import '../../css/x/xk4xuvuka.css';
import '../../css/x/xfngl4bbv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vz9ue_anp"/><path class="xk4xuvuka"/><path class="xfngl4bbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:radio-fill"} {...others} />);
}

export default Component;
