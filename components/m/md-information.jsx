import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cetnc8bas.css';
import '../../css/d/d2kx6_b8f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cetnc8bas"/><path class="d2kx6_b8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-information"} {...others} />);
}

export default Component;
