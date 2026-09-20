import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3j5tbb3r.css';
import '../../css/p/p1hlxdb5d.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q3j5tbb3r"/><path clip-rule="evenodd" class="p1hlxdb5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:discord-16"} {...others} />);
}

export default Component;
