import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-9c7jf-e.css';
import '../../css/l/la3uc6bkj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d-9c7jf-e"/><path class="la3uc6bkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:control-rod-20-bold"} {...others} />);
}

export default Component;
