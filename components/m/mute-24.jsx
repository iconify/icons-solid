import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rd-rm_hvj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rd-rm_hvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:mute-24"} {...others} />);
}

export default Component;
