import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnxgm-9cj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dnxgm-9cj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:ease-out-filled"} {...others} />);
}

export default Component;
