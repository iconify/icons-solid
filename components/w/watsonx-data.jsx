import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6bc1hbel.css';
import '../../css/d/d8vaue9uw.css';
import '../../css/d/dtcgrhbxr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="r6bc1hbel"/><path class="d8vaue9uw"/><path class="dtcgrhbxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:watsonx-data"} {...others} />);
}

export default Component;
