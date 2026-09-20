import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvqeztwih.css';
import '../../css/y/ylbwdpmem.css';
import '../../css/c/czi_nx33i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lvqeztwih"/><path class="ylbwdpmem"/><path class="czi_nx33i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-product-report-present-grahp"} {...others} />);
}

export default Component;
