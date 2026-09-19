import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fe_1rzbid.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="fe_1rzbid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:resellerhosting"} {...others} />);
}

export default Component;
