import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfgxx8b_w.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="lfgxx8b_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:failed"} {...others} />);
}

export default Component;
