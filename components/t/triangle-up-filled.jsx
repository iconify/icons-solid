import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fe27yw0co.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="fe27yw0co"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:triangle-up-filled"} {...others} />);
}

export default Component;
