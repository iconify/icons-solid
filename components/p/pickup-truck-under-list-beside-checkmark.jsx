import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocvy942nz.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ocvy942nz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pickup-truck-under-list-beside-checkmark"} {...others} />);
}

export default Component;
