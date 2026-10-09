import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ky693gb4a.css';
import '../../css/m/mkb2ul-2f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ky693gb4a"/><path class="mkb2ul-2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hex-nut-20"} {...others} />);
}

export default Component;
