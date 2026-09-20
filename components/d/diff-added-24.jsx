import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/stu8cqb7t.css';
import '../../css/c/c485hsbmk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="stu8cqb7t"/><path class="c485hsbmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:diff-added-24"} {...others} />);
}

export default Component;
