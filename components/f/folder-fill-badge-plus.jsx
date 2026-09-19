import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0bt5t-7t.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="m0bt5t-7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:folder-fill-badge-plus"} {...others} />);
}

export default Component;
