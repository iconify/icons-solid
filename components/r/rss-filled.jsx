import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7n3pkxoe.css';
import '../../css/y/yy8wd3b-a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l7n3pkxoe"/><path class="yy8wd3b-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:rss-filled"} {...others} />);
}

export default Component;
