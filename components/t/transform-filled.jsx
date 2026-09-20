import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9n0dy_jm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v9n0dy_jm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:transform-filled"} {...others} />);
}

export default Component;
