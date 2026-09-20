import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xce_36ygs.css';
import '../../css/u/u6urlybip.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xce_36ygs"/><path class="u6urlybip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:people-group-duotone"} {...others} />);
}

export default Component;
