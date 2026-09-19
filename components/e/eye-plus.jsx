import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eziq8xbrj.css';
import '../../css/s/sb7vsacsn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="eziq8xbrj"/><path class="sb7vsacsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:eye-plus"} {...others} />);
}

export default Component;
