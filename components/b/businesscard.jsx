import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvj-cvb5m.css';

const viewBox = {"width":1025,"height":768};
const content = `<path class="xvj-cvb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:businesscard"} {...others} />);
}

export default Component;
