import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uecfotbfx.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="uecfotbfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:smileys-sad"} {...others} />);
}

export default Component;
