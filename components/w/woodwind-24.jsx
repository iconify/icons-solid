import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kt5jg9bzv.css';
import '../../css/e/ecruigbtp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kt5jg9bzv"/><path class="ecruigbtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:woodwind-24"} {...others} />);
}

export default Component;
