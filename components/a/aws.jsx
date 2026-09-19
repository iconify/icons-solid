import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdv8sj9wu.css';
import '../../css/a/a5yf-1k-d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wdv8sj9wu"/><path class="a5yf-1k-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:aws"} {...others} />);
}

export default Component;
