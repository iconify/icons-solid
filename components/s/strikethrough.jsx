import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/brox0--5x.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="brox0--5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:strikethrough"} {...others} />);
}

export default Component;
