import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjkn6nbgz.css';
import '../../css/b/boa7bx3yi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xjkn6nbgz"/><path class="boa7bx3yi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:recive-square-bold-duotone"} {...others} />);
}

export default Component;
