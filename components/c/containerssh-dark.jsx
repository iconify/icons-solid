import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wb5bgx25v.css';
import '../../css/a/az6xitzef.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wb5bgx25v"/><path class="az6xitzef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:containerssh-dark"} {...others} />);
}

export default Component;
