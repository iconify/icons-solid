import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aggrzgk7q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="aggrzgk7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:vanity-mirror"} {...others} />);
}

export default Component;
