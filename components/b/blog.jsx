import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwskhw6wu.css';
import '../../css/j/jmbniybow.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vwskhw6wu"/><path class="jmbniybow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:blog"} {...others} />);
}

export default Component;
