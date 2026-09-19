import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npvpxe_he.css';
import '../../css/e/e7idfvbox.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="npvpxe_he"/><path class="e7idfvbox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-react"} {...others} />);
}

export default Component;
