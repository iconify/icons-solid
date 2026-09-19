import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q367x2bks.css';
import '../../css/a/ae_9512ms.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q367x2bks"/><path class="ae_9512ms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:tablet-landscape"} {...others} />);
}

export default Component;
