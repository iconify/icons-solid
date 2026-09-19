import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gd-g8ob1i.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="gd-g8ob1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:box-tissue"} {...others} />);
}

export default Component;
