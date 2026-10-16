import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hear8yb0f.css';
import '../../css/j/j712tjf1u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hear8yb0f"/><path class="j712tjf1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wrap-text-48-bold"} {...others} />);
}

export default Component;
