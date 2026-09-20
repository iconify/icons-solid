import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agz0d01mv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="agz0d01mv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:pentagon-plus"} {...others} />);
}

export default Component;
