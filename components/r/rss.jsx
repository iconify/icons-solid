import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zvi1ht2vd.css';

const viewBox = {"width":464,"height":488};
const content = `<path class="zvi1ht2vd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:rss"} {...others} />);
}

export default Component;
