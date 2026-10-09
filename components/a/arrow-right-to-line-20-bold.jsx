import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvilsvvcy.css';
import '../../css/d/d6ukndv1x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bvilsvvcy"/><path class="d6ukndv1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-right-to-line-20-bold"} {...others} />);
}

export default Component;
