import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5eh_3-2b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r5eh_3-2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:squircle-filled"} {...others} />);
}

export default Component;
