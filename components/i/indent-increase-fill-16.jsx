import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/efihxg8fx.css';
import '../../css/s/sz9hlnbjp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="efihxg8fx"/><path class="sz9hlnbjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:indent-increase-fill-16"} {...others} />);
}

export default Component;
