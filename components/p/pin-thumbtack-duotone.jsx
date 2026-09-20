import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu1k7ld7a.css';
import '../../css/n/n41378bui.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nu1k7ld7a"/><path clip-rule="evenodd" class="n41378bui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:pin-thumbtack-duotone"} {...others} />);
}

export default Component;
