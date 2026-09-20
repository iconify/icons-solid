import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_w_6qbbz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s_w_6qbbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:chevron-right-square-fill"} {...others} />);
}

export default Component;
