import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvhljtbdd.css';
import '../../css/d/dwu99p9fj.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="nvhljtbdd"/><path class="dwu99p9fj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:picture"} {...others} />);
}

export default Component;
