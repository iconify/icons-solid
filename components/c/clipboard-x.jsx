import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/npn5zfbdr.css';
import '../../css/p/p7p0_0bwx.css';
import '../../css/h/h2y_02bid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="npn5zfbdr"/><rect transform="rotate(-90 7.33 5.59)" class="p7p0_0bwx"/><path class="h2y_02bid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:clipboard-x"} {...others} />);
}

export default Component;
