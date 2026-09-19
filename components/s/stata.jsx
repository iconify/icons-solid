import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnwxg_aar.css';
import '../../css/v/v5-1tabpu.css';

const viewBox = {"width":16,"height":16};
const content = `<rect class="qnwxg_aar"/><path class="v5-1tabpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:stata"} {...others} />);
}

export default Component;
