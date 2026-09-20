import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hz71yshvb.css';
import '../../css/k/k9--tbbhz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hz71yshvb"/><path class="k9--tbbhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:alipay-logo-bold"} {...others} />);
}

export default Component;
