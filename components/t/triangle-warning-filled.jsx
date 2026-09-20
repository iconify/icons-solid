import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhn31wqfx.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="qhn31wqfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:triangle-warning-filled"} {...others} />);
}

export default Component;
