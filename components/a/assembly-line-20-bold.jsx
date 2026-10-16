import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbu76sy7z.css';
import '../../css/n/nr2v8obrq.css';
import '../../css/b/b-1ddne5q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lbu76sy7z"/><path class="nr2v8obrq"/><path class="b-1ddne5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:assembly-line-20-bold"} {...others} />);
}

export default Component;
