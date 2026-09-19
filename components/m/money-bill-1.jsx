import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwr6088ru.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="hwr6088ru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-regular:money-bill-1"} {...others} />);
}

export default Component;
