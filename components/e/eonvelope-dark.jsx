import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/taqcn9bfg.css';
import '../../css/b/bbny_5ghg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="taqcn9bfg"/><path class="bbny_5ghg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:eonvelope-dark"} {...others} />);
}

export default Component;
