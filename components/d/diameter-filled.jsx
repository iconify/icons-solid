import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bb-_29axf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bb-_29axf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:diameter-filled"} {...others} />);
}

export default Component;
