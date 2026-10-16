import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nusxv79yo.css';
import '../../css/s/s3zf9ib5t.css';
import '../../css/f/f7-q73bok.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nusxv79yo"/><path class="s3zf9ib5t"/><path class="f7-q73bok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ammonia-tank-20-bold"} {...others} />);
}

export default Component;
