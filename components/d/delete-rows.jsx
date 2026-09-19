import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sf1c1hbcj.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="sf1c1hbcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:delete-rows"} {...others} />);
}

export default Component;
