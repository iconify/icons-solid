import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obj4ptb6w.css';

const viewBox = {"width":1504,"height":1792};
const content = `<path class="obj4ptb6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:font-awesome"} {...others} />);
}

export default Component;
