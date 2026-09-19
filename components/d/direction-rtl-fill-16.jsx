import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8tufhvwy.css';
import '../../css/y/y8-ea6dak.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x8tufhvwy"/><path class="y8-ea6dak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:direction-rtl-fill-16"} {...others} />);
}

export default Component;
