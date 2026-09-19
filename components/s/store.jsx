import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/teanu_nhg.css';

const viewBox = {"width":616,"height":512};
const content = `<path class="teanu_nhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:store"} {...others} />);
}

export default Component;
