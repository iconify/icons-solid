import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2j0xjy7g.css';
import '../../css/b/bdp2a1_-z.css';
import '../../css/d/d7fm7dbeo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f2j0xjy7g"/><path class="bdp2a1_-z"/><path class="d7fm7dbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-mail-light"} {...others} />);
}

export default Component;
