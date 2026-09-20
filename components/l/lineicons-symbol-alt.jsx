import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kr4-27x8c.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="kr4-27x8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:lineicons-symbol-alt"} {...others} />);
}

export default Component;
