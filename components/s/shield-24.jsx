import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7y0q8bps.css';
import '../../css/d/d25y6j89z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r7y0q8bps"/><path class="d25y6j89z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:shield-24"} {...others} />);
}

export default Component;
