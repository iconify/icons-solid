import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1adhfb4y.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="v1adhfb4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:refresh-filled"} {...others} />);
}

export default Component;
