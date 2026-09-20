import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fx73xpb2j.css';
import '../../css/i/i-yovpx2o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fx73xpb2j"/><path class="i-yovpx2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:key-asterisk-24"} {...others} />);
}

export default Component;
