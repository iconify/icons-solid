import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ek80r3bjn.css';

const viewBox = {"width":19,"height":24};
const content = `<path class="ek80r3bjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:raspberry-pi"} {...others} />);
}

export default Component;
