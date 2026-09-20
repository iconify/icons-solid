import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ianewrbwe.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ianewrbwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:star-plus-filled"} {...others} />);
}

export default Component;
