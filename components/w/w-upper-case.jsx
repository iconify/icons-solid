import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/er9vcipei.css';

const viewBox = {"width":888,"height":786};
const content = `<path class="er9vcipei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:w-upper-case"} {...others} />);
}

export default Component;
