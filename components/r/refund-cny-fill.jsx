import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mn6i_fowy.css';
import '../../css/a/adhtr2bik.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mn6i_fowy"/><path class="adhtr2bik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:refund-cny-fill"} {...others} />);
}

export default Component;
