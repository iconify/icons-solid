import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3att8bhb.css';
import '../../css/s/s2tkiab1n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r3att8bhb"/><path class="s2tkiab1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chart-stacked-filled"} {...others} />);
}

export default Component;
