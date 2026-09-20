import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dr6tjj6uj.css';
import '../../css/p/pytza4zbd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dr6tjj6uj"/><path class="pytza4zbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:etsy"} {...others} />);
}

export default Component;
