import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fitr7gb4j.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="fitr7gb4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:circlenine"} {...others} />);
}

export default Component;
