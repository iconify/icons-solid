import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_k26acbn.css';
import '../../css/d/doncjo_7u.css';
import '../../css/y/y7f_1q1fr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e_k26acbn"/><path class="doncjo_7u"/><rect class="y7f_1q1fr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:money-check-1"} {...others} />);
}

export default Component;
