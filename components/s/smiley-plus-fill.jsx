import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gal76s2ln.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="gal76s2ln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:smiley-plus-fill"} {...others} />);
}

export default Component;
