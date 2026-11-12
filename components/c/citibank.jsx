import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/il552bv-l.css';
import '../../css/u/uzxqaob3s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="il552bv-l"/><path class="uzxqaob3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:citibank"} {...others} />);
}

export default Component;
