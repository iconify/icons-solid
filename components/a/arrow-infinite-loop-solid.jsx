import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksr3zxbsj.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ksr3zxbsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:arrow-infinite-loop-solid"} {...others} />);
}

export default Component;
