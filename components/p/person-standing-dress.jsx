import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zg_qm-3fy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zg_qm-3fy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:person-standing-dress"} {...others} />);
}

export default Component;
