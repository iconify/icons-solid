import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oso_04bvg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oso_04bvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:cpap-masks-outline"} {...others} />);
}

export default Component;
