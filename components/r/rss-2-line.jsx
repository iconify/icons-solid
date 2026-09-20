import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cd_h-2b1r.css';
import '../../css/b/bbae6rbgj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cd_h-2b1r"/><path class="bbae6rbgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:rss-2-line"} {...others} />);
}

export default Component;
