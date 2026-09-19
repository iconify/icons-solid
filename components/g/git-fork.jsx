import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fz5z4w1dv.css';

const viewBox = {"width":2560,"height":2048};
const content = `<path class="fz5z4w1dv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:git-fork"} {...others} />);
}

export default Component;
