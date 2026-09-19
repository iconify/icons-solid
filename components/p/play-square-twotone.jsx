import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gc8-4tb2b.css';
import '../../css/w/we3kj3uua.css';
import '../../css/c/c-bx80bqi.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="gc8-4tb2b"/><path class="we3kj3uua"/><path class="c-bx80bqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:play-square-twotone"} {...others} />);
}

export default Component;
