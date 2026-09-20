import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dspnf0f_i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dspnf0f_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:circle-dash-fill"} {...others} />);
}

export default Component;
