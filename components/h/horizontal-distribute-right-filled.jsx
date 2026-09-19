import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3hxb00gr.css';
import '../../css/c/c2uptobfq.css';
import '../../css/n/nlryl0bqi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g3hxb00gr"/><rect class="c2uptobfq"/><rect class="nlryl0bqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:horizontal-distribute-right-filled"} {...others} />);
}

export default Component;
