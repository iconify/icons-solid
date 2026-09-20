import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qleqgr0-l.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<path class="qleqgr0-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:backward-square-f"} {...others} />);
}

export default Component;
