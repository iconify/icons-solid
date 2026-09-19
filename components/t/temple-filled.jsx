import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkh3mii8l.css';
import '../../css/w/w4ucru71v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mkh3mii8l"/><path class="w4ucru71v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:temple-filled"} {...others} />);
}

export default Component;
