import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bur-p6bwp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bur-p6bwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:bulb-2-fill"} {...others} />);
}

export default Component;
