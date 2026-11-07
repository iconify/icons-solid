import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udz5nqb7v.css';
import '../../css/k/kdob9slbu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="udz5nqb7v"/><path class="kdob9slbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pip-bold-duotone"} {...others} />);
}

export default Component;
