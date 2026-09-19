import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxxgum2ag.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="gxxgum2ag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:star-half-stroke"} {...others} />);
}

export default Component;
