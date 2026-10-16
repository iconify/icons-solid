import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crpcihb-l.css';
import '../../css/k/k1v5xj0bd.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="crpcihb-l"/><path class="k1v5xj0bd"/><path class="z4sj3ixdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:invoice-paid-48"} {...others} />);
}

export default Component;
