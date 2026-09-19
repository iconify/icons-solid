import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsgw3bbqf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qsgw3bbqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:menu-duo-md"} {...others} />);
}

export default Component;
