import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pol6cgbck.css';
import '../../css/d/drobpt_me.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="pol6cgbck"/><path class="drobpt_me"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:rocksdb"} {...others} />);
}

export default Component;
