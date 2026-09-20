import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zy58e45_v.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zy58e45_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:magnify-with-minus"} {...others} />);
}

export default Component;
