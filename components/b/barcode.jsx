import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdgey5bpj.css';
import '../../css/z/zxi_dh3ke.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rdgey5bpj"/><path class="zxi_dh3ke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:barcode"} {...others} />);
}

export default Component;
