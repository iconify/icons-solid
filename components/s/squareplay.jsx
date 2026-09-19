import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1acf0ipx.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="t1acf0ipx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:squareplay"} {...others} />);
}

export default Component;
