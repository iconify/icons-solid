import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/io412tbjd.css';
import '../../css/o/oj-_-5bcx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="io412tbjd"/><path class="oj-_-5bcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:toodoom"} {...others} />);
}

export default Component;
