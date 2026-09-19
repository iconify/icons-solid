import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwft8icjo.css';
import '../../css/g/g3ep0ud-q.css';
import '../../css/k/k1nnfsbnq.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="iwft8icjo"/><path class="g3ep0ud-q"/><path class="k1nnfsbnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:audio-twotone"} {...others} />);
}

export default Component;
