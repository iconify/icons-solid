import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxkoc6b9e.css';
import '../../css/o/o23x06b7q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fxkoc6b9e"/><path class="o23x06b7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:reply-all"} {...others} />);
}

export default Component;
