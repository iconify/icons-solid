import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oljv3-_nv.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="oljv3-_nv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:hand-cursor-remix"} {...others} />);
}

export default Component;
