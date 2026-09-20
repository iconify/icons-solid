import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zymuftb-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zymuftb-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:medicine-bottle-line"} {...others} />);
}

export default Component;
