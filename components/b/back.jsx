import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7bk3wbqk.css';
import '../../css/r/r7lg6bmas.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="o7bk3wbqk"/><path class="r7lg6bmas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:back"} {...others} />);
}

export default Component;
