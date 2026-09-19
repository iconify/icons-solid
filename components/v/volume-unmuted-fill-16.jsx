import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i95u-8bjy.css';
import '../../css/d/dxyzwm2nj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i95u-8bjy"/><path class="dxyzwm2nj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:volume-unmuted-fill-16"} {...others} />);
}

export default Component;
