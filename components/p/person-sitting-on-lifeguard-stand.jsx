import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f99k2xbqk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="f99k2xbqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-sitting-on-lifeguard-stand"} {...others} />);
}

export default Component;
