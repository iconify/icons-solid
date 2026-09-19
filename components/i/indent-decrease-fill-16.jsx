import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/efihxg8fx.css';
import '../../css/d/dr6iz3bit.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="efihxg8fx"/><path class="dr6iz3bit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:indent-decrease-fill-16"} {...others} />);
}

export default Component;
