import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2bqgmpvm.css';
import '../../css/o/ove83va-t.css';

const viewBox = {"width":16,"height":13};
const content = `<path class="k2bqgmpvm"/><path class="ove83va-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:eye"} {...others} />);
}

export default Component;
