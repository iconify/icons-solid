import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/ogtr9eflh.css';
import '../../css/o/o45e73ara.css';
import '../../css/c/cvx-s1b9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ogtr9eflh"/><path class="o45e73ara"/><path class="cvx-s1b9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bookmark-block-01"} {...others} />);
}

export default Component;
