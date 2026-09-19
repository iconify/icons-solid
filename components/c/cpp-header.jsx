import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn9o4mbwr.css';
import '../../css/b/bmx7xbb_a.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="tn9o4mbwr"/><path class="bmx7xbb_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:cpp-header"} {...others} />);
}

export default Component;
