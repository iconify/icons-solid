import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-j1wjl-y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n-j1wjl-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:reactflux-dark"} {...others} />);
}

export default Component;
