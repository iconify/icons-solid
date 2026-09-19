import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqg2w0bre.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="mqg2w0bre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:child"} {...others} />);
}

export default Component;
