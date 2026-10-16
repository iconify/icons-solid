import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-_33w5dr.css';
import '../../css/w/wu0c0utkt.css';

const viewBox = {"width":496.39,"height":625.48,"left":81.75,"top":17.26};
const content = `<path class="l-_33w5dr"/><path class="wu0c0utkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bytestash"} {...others} />);
}

export default Component;
