import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uio9qibqb.css';
import '../../css/j/jcy41ac7s.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="uio9qibqb"/><path class="jcy41ac7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:richy"} {...others} />);
}

export default Component;
