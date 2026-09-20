import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxg2k8bsk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jxg2k8bsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:battery-charging"} {...others} />);
}

export default Component;
