import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jps97ubht.css';

const viewBox = {"width":1026,"height":1023};
const content = `<path class="jps97ubht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:fontcase"} {...others} />);
}

export default Component;
