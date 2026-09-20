import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wsjs4_b4y.css';
import '../../css/c/ckbg2-b9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wsjs4_b4y"/><path class="ckbg2-b9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:project-symlink-24"} {...others} />);
}

export default Component;
