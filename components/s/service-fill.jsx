import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfgs5d_bi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hfgs5d_bi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:service-fill"} {...others} />);
}

export default Component;
