import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmq-2ccok.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mmq-2ccok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:trending-up-fill"} {...others} />);
}

export default Component;
