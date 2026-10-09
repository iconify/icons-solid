import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9xxoy94z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a9xxoy94z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rss-48-bold"} {...others} />);
}

export default Component;
