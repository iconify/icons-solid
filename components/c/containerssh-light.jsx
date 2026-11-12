import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pw2k4fb0y.css';
import '../../css/d/d5-tlybrh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pw2k4fb0y"/><path class="d5-tlybrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:containerssh-light"} {...others} />);
}

export default Component;
