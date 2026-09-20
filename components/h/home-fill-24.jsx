import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7-q23bmv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p7-q23bmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:home-fill-24"} {...others} />);
}

export default Component;
