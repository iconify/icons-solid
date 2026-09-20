import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sz885nfzw.css';
import '../../css/p/p_2ax6o9y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sz885nfzw"/><path class="p_2ax6o9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:code-review-24"} {...others} />);
}

export default Component;
