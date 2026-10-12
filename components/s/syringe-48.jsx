import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9gjhw_ll.css';
import '../../css/b/bfn8irqrh.css';
import '../../css/z/zyce2wqev.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y9gjhw_ll"/><path class="bfn8irqrh"/><path class="zyce2wqev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:syringe-48"} {...others} />);
}

export default Component;
