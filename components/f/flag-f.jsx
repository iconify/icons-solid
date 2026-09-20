import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kevq8pw6d.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};
const content = `<path class="kevq8pw6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:flag-f"} {...others} />);
}

export default Component;
