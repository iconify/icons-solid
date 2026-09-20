import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5i5ttbvx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="g5i5ttbvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bicycle-under-shower-spray"} {...others} />);
}

export default Component;
