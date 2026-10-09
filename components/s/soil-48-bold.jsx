import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a99zx0bqt.css';
import '../../css/t/t9tlldbol.css';
import '../../css/z/zyduf68zh.css';
import '../../css/q/qoz9fybla.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a99zx0bqt"/><path class="t9tlldbol"/><path class="zyduf68zh"/><path class="qoz9fybla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:soil-48-bold"} {...others} />);
}

export default Component;
