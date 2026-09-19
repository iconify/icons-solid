import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvc87pa5f.css';
import '../../css/o/os561700d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rvc87pa5f"/><path class="os561700d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-repeat"} {...others} />);
}

export default Component;
