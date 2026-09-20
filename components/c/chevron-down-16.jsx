import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yz6c3ccrp.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="yz6c3ccrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:chevron-down-16"} {...others} />);
}

export default Component;
