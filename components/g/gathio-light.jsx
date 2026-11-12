import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9ywkvrys.css';
import '../../css/v/vzun6nk-m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l9ywkvrys"/><path class="vzun6nk-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gathio-light"} {...others} />);
}

export default Component;
