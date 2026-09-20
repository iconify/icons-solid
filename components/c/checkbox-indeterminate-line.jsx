import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdp_mqutl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wdp_mqutl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:checkbox-indeterminate-line"} {...others} />);
}

export default Component;
