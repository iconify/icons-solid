import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hx8kpodkc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hx8kpodkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:kanopy-alt"} {...others} />);
}

export default Component;
