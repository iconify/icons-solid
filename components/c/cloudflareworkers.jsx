import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngo9862vv.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ngo9862vv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:cloudflareworkers"} {...others} />);
}

export default Component;
