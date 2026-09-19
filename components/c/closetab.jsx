import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvvo5resr.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="mvvo5resr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:closetab"} {...others} />);
}

export default Component;
