import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmzlr3bpr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zmzlr3bpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:git-branch-plus"} {...others} />);
}

export default Component;
