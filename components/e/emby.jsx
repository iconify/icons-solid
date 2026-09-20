import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jg_rohbjm.css';
import '../../css/c/cdq24z_9g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jg_rohbjm"/><path class="cdq24z_9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:emby"} {...others} />);
}

export default Component;
