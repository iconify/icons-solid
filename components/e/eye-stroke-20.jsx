import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob_63mboo.css';
import '../../css/w/w55hdcgdy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ob_63mboo"/><path class="w55hdcgdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:eye-stroke-20"} {...others} />);
}

export default Component;
