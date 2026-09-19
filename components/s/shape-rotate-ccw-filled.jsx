import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnha371ox.css';
import '../../css/o/o6hj5abyd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xnha371ox"/><path class="o6hj5abyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:shape-rotate-ccw-filled"} {...others} />);
}

export default Component;
