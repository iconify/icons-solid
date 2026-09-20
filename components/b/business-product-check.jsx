import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxtl_ubyj.css';
import '../../css/s/s7-mspfvl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yxtl_ubyj"/><path class="s7-mspfvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-product-check"} {...others} />);
}

export default Component;
