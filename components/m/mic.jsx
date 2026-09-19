import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsxk0_bpo.css';
import '../../css/u/usq2d7duw.css';

const viewBox = {"width":17,"height":24};
const content = `<path class="dsxk0_bpo"/><path class="usq2d7duw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:mic"} {...others} />);
}

export default Component;
