import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vn6jciybe.css';
import '../../css/n/nxbv23bie.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vn6jciybe"/><path class="nxbv23bie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:rss"} {...others} />);
}

export default Component;
