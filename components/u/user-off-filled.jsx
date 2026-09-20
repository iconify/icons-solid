import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mc_r4ms4s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mc_r4ms4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-off-filled"} {...others} />);
}

export default Component;
