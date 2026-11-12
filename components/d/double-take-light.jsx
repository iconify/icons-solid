import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ec4wb2pdg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ec4wb2pdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:double-take-light"} {...others} />);
}

export default Component;
