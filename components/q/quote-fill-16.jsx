import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7jzx_b7q.css';
import '../../css/r/rx4fkk1gf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="m7jzx_b7q"/><path class="rx4fkk1gf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:quote-fill-16"} {...others} />);
}

export default Component;
