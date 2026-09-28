import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxojr_bfb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qxojr_bfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:notesnook"} {...others} />);
}

export default Component;
