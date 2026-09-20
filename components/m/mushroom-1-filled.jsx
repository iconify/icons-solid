import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lozx6-brm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lozx6-brm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mushroom-1-filled"} {...others} />);
}

export default Component;
