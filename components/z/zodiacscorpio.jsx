import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/roq8pmsyi.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="roq8pmsyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:zodiacscorpio"} {...others} />);
}

export default Component;
