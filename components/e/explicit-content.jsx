import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yz-efebcs.css';
import '../../css/n/n2j-lhblc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yz-efebcs"/><path class="n2j-lhblc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:explicit-content"} {...others} />);
}

export default Component;
