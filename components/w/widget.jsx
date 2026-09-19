import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpoubbo_e.css';
import '../../css/v/vh-necbur.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jpoubbo_e"/><path class="vh-necbur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:widget"} {...others} />);
}

export default Component;
