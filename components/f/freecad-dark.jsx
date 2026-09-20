import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp1kyrs5x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fp1kyrs5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:freecad-dark"} {...others} />);
}

export default Component;
