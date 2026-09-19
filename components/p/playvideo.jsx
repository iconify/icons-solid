import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le5_uo-aa.css';

const viewBox = {"width":1024,"height":960};
const content = `<path class="le5_uo-aa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:playvideo"} {...others} />);
}

export default Component;
