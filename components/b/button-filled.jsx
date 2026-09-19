import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_o-u7b9e.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="b_o-u7b9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:button-filled"} {...others} />);
}

export default Component;
