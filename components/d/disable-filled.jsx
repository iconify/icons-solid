import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yzcjc9-6a.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="yzcjc9-6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:disable-filled"} {...others} />);
}

export default Component;
