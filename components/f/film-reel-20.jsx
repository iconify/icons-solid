import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7r_6rw6k.css';
import '../../css/s/sr1rblb4o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z7r_6rw6k"/><path class="sr1rblb4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:film-reel-20"} {...others} />);
}

export default Component;
