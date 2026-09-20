import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l77vd0brf.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="l77vd0brf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:direction-ltr"} {...others} />);
}

export default Component;
