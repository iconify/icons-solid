import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9_ht237o.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="y9_ht237o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:quote-stroke-12"} {...others} />);
}

export default Component;
