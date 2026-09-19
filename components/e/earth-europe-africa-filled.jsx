import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/od4db_i1i.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="od4db_i1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:earth-europe-africa-filled"} {...others} />);
}

export default Component;
