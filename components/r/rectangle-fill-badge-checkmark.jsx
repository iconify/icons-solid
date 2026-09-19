import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy4c8qbek.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="jy4c8qbek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:rectangle-fill-badge-checkmark"} {...others} />);
}

export default Component;
