import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hp9sllmfa.css';
import '../../css/q/qoo-_6bwm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hp9sllmfa"/><path class="qoo-_6bwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:business-product-supplier-1"} {...others} />);
}

export default Component;
