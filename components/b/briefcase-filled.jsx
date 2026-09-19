import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hklz-72lg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hklz-72lg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:briefcase-filled"} {...others} />);
}

export default Component;
