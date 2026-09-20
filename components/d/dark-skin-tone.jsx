import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1e0kbbst.css';
import '../../css/y/yu8tkqs3l.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="o1e0kbbst"/><path class="yu8tkqs3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:dark-skin-tone"} {...others} />);
}

export default Component;
