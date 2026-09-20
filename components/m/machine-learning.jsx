import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycs1wjbcq.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ycs1wjbcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:machine-learning"} {...others} />);
}

export default Component;
