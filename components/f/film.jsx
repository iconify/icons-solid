import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvhljtbdd.css';
import '../../css/y/ykb_zpbhy.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="nvhljtbdd"/><path class="ykb_zpbhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:film"} {...others} />);
}

export default Component;
