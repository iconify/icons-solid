import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zuzli8bkb.css';
import '../../css/q/qy1k3p33h.css';
import '../../css/x/xchgk-0yz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zuzli8bkb"/><path class="qy1k3p33h"/><path class="xchgk-0yz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:phone-actions-remove-2"} {...others} />);
}

export default Component;
