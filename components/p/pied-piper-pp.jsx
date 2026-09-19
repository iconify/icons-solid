import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdsw_ab7l.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="xdsw_ab7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:pied-piper-pp"} {...others} />);
}

export default Component;
