import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw2c6mblg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gw2c6mblg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tshirt-on-clothes-hanger-and-folded-linens"} {...others} />);
}

export default Component;
