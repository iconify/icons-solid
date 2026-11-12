import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0ai2gp-g.css';
import '../../css/z/zomqz72kb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g0ai2gp-g"/><path class="zomqz72kb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fmd-light"} {...others} />);
}

export default Component;
