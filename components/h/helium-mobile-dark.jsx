import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k48fiacvn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k48fiacvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:helium-mobile-dark"} {...others} />);
}

export default Component;
