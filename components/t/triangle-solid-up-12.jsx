import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ia0t11r-k.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="ia0t11r-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:triangle-solid-up-12"} {...others} />);
}

export default Component;
