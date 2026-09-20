import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayuyt_49f.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ayuyt_49f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:haze-filled"} {...others} />);
}

export default Component;
