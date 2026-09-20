import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzujfg3rl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mzujfg3rl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:sorting"} {...others} />);
}

export default Component;
