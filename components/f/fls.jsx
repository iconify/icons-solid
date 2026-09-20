import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/citlsybef.css';
import '../../css/k/kd8sdbbzj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="citlsybef"/><path class="kd8sdbbzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:fls"} {...others} />);
}

export default Component;
