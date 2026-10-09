import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bodkpqb0q.css';
import '../../css/a/a07z9hbzk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bodkpqb0q"/><path class="a07z9hbzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:environmental-impact-20"} {...others} />);
}

export default Component;
