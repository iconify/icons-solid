import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bggzpxb-r.css';
import '../../css/v/v-7fu2bmn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bggzpxb-r"/><path class="v-7fu2bmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:composerize"} {...others} />);
}

export default Component;
