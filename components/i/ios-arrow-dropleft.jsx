import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkskkgb5x.css';
import '../../css/n/nek1lu3pi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nkskkgb5x"/><path class="nek1lu3pi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-arrow-dropleft"} {...others} />);
}

export default Component;
