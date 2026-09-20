import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aeny3cb4v.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="aeny3cb4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:sedan-under-list-beside-checkmark"} {...others} />);
}

export default Component;
