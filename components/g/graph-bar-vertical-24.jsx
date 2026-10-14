import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yr4n_ac6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yr4n_ac6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:graph-bar-vertical-24"} {...others} />);
}

export default Component;
