import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5f0jpb8p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u5f0jpb8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nocobase-dark"} {...others} />);
}

export default Component;
