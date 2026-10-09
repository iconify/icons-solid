import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwpjg0bhd.css';
import '../../css/c/c_dqrlbfr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lwpjg0bhd"/><path class="c_dqrlbfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:golf-20-bold"} {...others} />);
}

export default Component;
