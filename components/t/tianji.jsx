import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a11tzybnd.css';
import '../../css/a/ao20o-byk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a11tzybnd"/><path class="ao20o-byk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tianji"} {...others} />);
}

export default Component;
