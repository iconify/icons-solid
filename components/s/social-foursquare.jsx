import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h20o-8bsr.css';
import '../../css/m/mb7553tox.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="h20o-8bsr"/><path class="mb7553tox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-foursquare"} {...others} />);
}

export default Component;
