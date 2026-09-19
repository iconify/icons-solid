import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b36-k-mqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b36-k-mqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:checks-filled"} {...others} />);
}

export default Component;
