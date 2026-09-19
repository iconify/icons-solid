import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dl0-2brwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dl0-2brwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:checklist-filled"} {...others} />);
}

export default Component;
