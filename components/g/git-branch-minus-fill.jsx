import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xh4p9k52o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xh4p9k52o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:git-branch-minus-fill"} {...others} />);
}

export default Component;
