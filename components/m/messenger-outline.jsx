import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iak_x3heq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="iak_x3heq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:messenger-outline"} {...others} />);
}

export default Component;
