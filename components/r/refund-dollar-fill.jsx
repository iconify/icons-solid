import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gu1amlj5r.css';
import '../../css/m/mn6i_fowy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gu1amlj5r"/><path class="mn6i_fowy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:refund-dollar-fill"} {...others} />);
}

export default Component;
