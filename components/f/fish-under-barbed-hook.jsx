import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7cbi6b2p.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="u7cbi6b2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:fish-under-barbed-hook"} {...others} />);
}

export default Component;
