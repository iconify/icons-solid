import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lka0l_80a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lka0l_80a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:git-branch-2-line"} {...others} />);
}

export default Component;
