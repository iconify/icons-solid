import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2in0hboi.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="j2in0hboi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:rectangle-wide-filled"} {...others} />);
}

export default Component;
