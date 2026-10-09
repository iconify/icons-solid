import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g39s4_i7q.css';
import '../../css/d/dbz_t_b9c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g39s4_i7q"/><path class="dbz_t_b9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:saf-20-bold"} {...others} />);
}

export default Component;
