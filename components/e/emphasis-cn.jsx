import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chy9vjf-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="chy9vjf-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:emphasis-cn"} {...others} />);
}

export default Component;
