import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2txoccoh.css';
import '../../css/w/w37lp3bjt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r2txoccoh"/><path clip-rule="evenodd" class="w37lp3bjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hiking-minimalistic-bold"} {...others} />);
}

export default Component;
