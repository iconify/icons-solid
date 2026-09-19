import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zyk415qex.css';
import '../../css/s/sokimzycn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zyk415qex"/><path class="sokimzycn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:watermelon-filled"} {...others} />);
}

export default Component;
