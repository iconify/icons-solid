import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zy1rz-bei.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="zy1rz-bei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:smartphone-notch"} {...others} />);
}

export default Component;
