import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7zxc20fw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o7zxc20fw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:phoenix-semiflush"} {...others} />);
}

export default Component;
