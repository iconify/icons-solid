import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bnjnaso6q.css';
import '../../css/a/a-sn7bb5a.css';
import '../../css/f/f0cwefboj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bnjnaso6q"/><path class="a-sn7bb5a"/><path class="f0cwefboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:worship"} {...others} />);
}

export default Component;
