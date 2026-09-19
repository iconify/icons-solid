import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bro3b7b7u.css';
import '../../css/p/ptu48kbob.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="bro3b7b7u"/><path class="ptu48kbob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:edit"} {...others} />);
}

export default Component;
