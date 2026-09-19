import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwrkaoe0y.css';
import '../../css/o/oedplzbcd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vwrkaoe0y"/><path class="oedplzbcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:collocation"} {...others} />);
}

export default Component;
