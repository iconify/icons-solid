import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_k6wxb2o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w_k6wxb2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:tab-x"} {...others} />);
}

export default Component;
