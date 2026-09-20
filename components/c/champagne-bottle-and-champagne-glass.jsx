import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gls8srdxo.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gls8srdxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:champagne-bottle-and-champagne-glass"} {...others} />);
}

export default Component;
