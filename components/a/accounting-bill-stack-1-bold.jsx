import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a51bl-bho.css';
import '../../css/o/o0un9yhqx.css';
import '../../css/s/snq8qn9hd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a51bl-bho"/><path class="o0un9yhqx"/><path class="snq8qn9hd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:accounting-bill-stack-1-bold"} {...others} />);
}

export default Component;
