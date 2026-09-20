import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yequ1mb2m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yequ1mb2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dokploy-dark"} {...others} />);
}

export default Component;
