import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_jalmbdj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j_jalmbdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:dial-pad-finger-2"} {...others} />);
}

export default Component;
